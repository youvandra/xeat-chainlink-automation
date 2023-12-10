// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts@4.6.0/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.6.0/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@4.6.0/access/Ownable.sol";
import "@openzeppelin/contracts@4.6.0/utils/Counters.sol";
import "@chainlink/contracts/src/v0.8/automation/AutomationCompatible.sol";

contract Xeat is ERC721, ERC721URIStorage, Ownable, AutomationCompatibleInterface {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;
    Counters.Counter private _eventIdCounter;
    uint256 lastCounter;
    // Struktur untuk menyimpan detail dari sebuah event
    struct EventDetails {
        string name;
        string eventImage;
        string venueImage;
        string about;
        string description;
        string terms;
        uint256 startDate;
        uint256 endDate;
        uint256 maxSupply;
        bool featured;
        uint256 pricePerNFT;
    }

    // Struktur untuk menyimpan data sebuah event
    struct Event {
        uint256 id;
        uint256 uriId;
        EventDetails details;
    }

    // Mapping untuk menyimpan event berdasarkan ID
    mapping(uint256 => Event) public events;
    // Mapping untuk menyimpan jumlah tiket yang terjual per event
    mapping(uint256 => uint256) public eventTicketsSold;
    // Mapping untuk menyimpan hubungan antara token ID dan event ID
    mapping(uint256 => uint256) private tokenToEvent;
    // Mapping untuk menyimpan URI untuk setiap tahap event
    mapping(uint256 => string[2]) private eventURIs;
    // Mapping untuk memeriksa apakah URI sebuah event telah diperbarui
    mapping(uint256 => bool) private _eventRevealed;

    constructor() ERC721("Xeat", "Xeat") {}

    // Fungsi untuk menetapkan URI event
    function setEventURI(uint256 eventId, string memory imageURI_ticket, string memory imageURI_reveal) public onlyOwner {
        eventURIs[eventId] = [imageURI_ticket, imageURI_reveal];
    }

    // Fungsi untuk membuat event baru
    function createEvent(string memory name, string memory eventImage, string memory venueImage, string memory about, string memory description, string memory terms, uint256 startDate, uint256 endDate, uint256 maxSupply, bool featured, uint256 pricePerNFT) public onlyOwner {
        uint256 eventId = _eventIdCounter.current();
        EventDetails memory details = EventDetails(name, eventImage, venueImage, about, description, terms, startDate, endDate, maxSupply, featured, pricePerNFT);
        events[eventId] = Event(eventId, eventId, details);
        _eventIdCounter.increment();
    }

    // Fungsi untuk membeli tiket / mint NFT
    function mintTicket(address recipient, uint256 eventId) public payable {
        // Pastikan pembayaran cukup untuk harga NFT
        // require(msg.value >= events[eventId].details.pricePerNFT, "Insufficient payment");
        require(eventTicketsSold[eventId] < events[eventId].details.maxSupply, "Event sold out");
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(recipient, tokenId);
        _setTokenURI(tokenId, eventURIs[eventId][0]);
        eventTicketsSold[eventId]++;
        tokenToEvent[tokenId] = eventId;
        _tokenIdCounter.increment();
    }

    

    // Fungsi untuk memperbarui URI NFT setelah event berakhir
    function updateEventURI(uint256 eventId) public {
        require(block.timestamp > events[eventId].details.endDate);
        for (uint256 i = 0; i < _tokenIdCounter.current(); i++) {
            if (tokenToEvent[i] == eventId) {
                string memory newUri = eventURIs[eventId][1];
                _setTokenURI(i, newUri);
            }
        }
    }

    function getAllEvents() public view returns (Event[] memory) {
        uint256 eventCount = _eventIdCounter.current();
        Event[] memory allEvents = new Event[](eventCount);

        for (uint256 i = 0; i < eventCount; i++) {
            Event storage eventItem = events[i];
            allEvents[i] = eventItem;
        }

        return allEvents;
    }


    function checkUpkeep(bytes calldata /* checkData */) external view returns (bool upkeepNeeded, bytes memory /* performData */) {
        upkeepNeeded = false;
        for (uint256 i = 0; i < _eventIdCounter.current(); i++) {
            if (block.timestamp > events[i].details.endDate && _eventRevealed[i] == false) {
                // Jika sebuah event telah berakhir dan belum diperbarui, maka upkeep diperlukan
                upkeepNeeded = true;
                break;
            }
        }
    }

    function performUpkeep(bytes calldata /* performData */) external {
        for (uint256 i = 0; i < _eventIdCounter.current(); i++) {
            if (block.timestamp > events[i].details.endDate && _eventRevealed[i] == false) {
                // Perbarui URI untuk event yang telah berakhir
                updateEventURI(i);
                _eventRevealed[i] = true;
            }
        }
    }

    // Override functions from ERC721 and ERC721URIStorage
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }
}