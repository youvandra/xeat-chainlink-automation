import { DownOutlined } from "@ant-design/icons"
import { Button, Dropdown, MenuProps, Space } from "antd"
import { MenuItemType } from "antd/es/menu/hooks/useItems"
import { useEffect, useState } from "react"
import { useContractRead } from "wagmi"
import abi from "abi/abi.json"
import EventCard from "components/event-card"
import SearchIcon from "components/icons/search"
import MainLayout from "pages/layout"
import { EventFilter } from "utils/interface_type"

export interface EventDetails {
  about: string
  description: string
  endDate: number
  eventImage: string
  featured: boolean
  maxSupply: number
  name: string
  pricePerNFT: number
  startDate: number
  terms: string
  venueImage: string
}

export interface EventStructureI {
  details: EventDetails
  id: number
  uriId: number
}

function EventsPage() {
  const [currentTimeFilter, setCurrenTimeFilter] = useState<EventFilter>("all")

  const [allEvent, setAllEvent] = useState<EventStructureI[] | []>([])

  const items: MenuProps["items"] = [
    {
      label: "Ending Soon",
      key: "1",
    },
    {
      label: "Featured",
      key: "2",
    },
  ]

  const [currentDropdownFilter, setCurrentDropdownFilter] = useState<MenuItemType>(items[0] as MenuItemType)

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    const clickedItem = items.find((item) => item?.key === e.key) as MenuItemType
    if (clickedItem && clickedItem.label) {
      setCurrentDropdownFilter(clickedItem)
    }
  }

  const menuProps = {
    items,
    onClick: handleMenuClick,
  }

  const { refetch: getEventDetail } = useContractRead({
    address: process.env.NEXT_PUBLIC_SMART_CONTRACT as `0x${string}`,
    abi: abi,
    functionName: "getAllEvents",
    // args: [Number(param?.id)],
  })

  const getData = async () => {
    try {
      const { data }: { data: any } = await getEventDetail?.()
      setAllEvent(data)
      console.log(data, "data")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getData()
    }, 1000)
  }, [])

  return (
    <MainLayout>
      <div className="flex h-screen flex-col bg-gradient-to-r from-xeat-black to-xeat-dark-blue">
        <section className="p-5 md:px-10">
          <div className="flex w-full flex-col items-center justify-center gap-5 rounded-xl bg-xeat-dark-grey px-5 py-3 uppercase md:flex-row md:gap-20">
            <div className="flex flex-col items-center">
              <span className="text-xs">All Events</span>
              <span className="text-xl font-medium">5</span>
            </div>
            <div className="hidden h-7 w-[1px] bg-xeat-grey md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-xs">Participants in All</span>
              <span className="text-xl font-medium">335</span>
            </div>
          </div>
          <div className="flex items-center justify-between border-b-1.5 border-xeat-dark-grey py-5">
            <div className="flex w-full flex-wrap gap-5 md:flex-nowrap">
              {Array<EventFilter>("all", "live", "upcoming", "featured", "ended").map((item, index) => {
                return (
                  <button
                    onClick={() => setCurrenTimeFilter(item)}
                    key={index}
                    className={`w-1/4 rounded-lg py-1 text-center capitalize ${
                      item === currentTimeFilter && "bg-xeat-dark-grey "
                    }`}
                  >
                    {item}
                  </button>
                )
              })}

              <div className="flex gap-2 md:basis-[70%]">
                <div className="flex grow items-center gap-0 overflow-hidden rounded-full border-1.5 border-xeat-dark-grey bg-xeat-black pl-4 pr-2 md:ml-5">
                  <SearchIcon className="h-5 w-5 fill-white" />
                  <input
                    type="text"
                    className="w-full grow bg-xeat-black p-2 placeholder:text-xeat-grey focus:outline-none "
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="flex basis-[30%] items-center justify-end">
                <Dropdown menu={menuProps}>
                  <Button className="group h-full border-1.5 border-xeat-dark-grey bg-xeat-dark-blue text-white transition-all duration-150 hover:border-white ">
                    <Space>
                      {currentDropdownFilter?.label}
                      <DownOutlined className="text-xeat-grey group-hover:text-white" />
                    </Space>
                  </Button>
                </Dropdown>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 md:grid-cols-3 md:p-10 lg:grid-cols-5">
          {allEvent?.map((item, index) => {
            return <EventCard key={index} href={`/events/${item.id}`} data={item.details} />
          })}
        </section>
      </div>
    </MainLayout>
  )
}

export default EventsPage
