import { CaretRightFilled, CloseOutlined, LoadingOutlined } from "@ant-design/icons"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useEffect, useState } from "react"
import { EventDetails } from "."

export default function EventDetailModal({
  buttonClassName,
  data,
  onBuyNFT,
  isLoading,
}: {
  buttonClassName?: string
  data: EventDetails | null
  onBuyNFT: any
  isLoading: boolean
}) {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  useEffect(() => {
    if (!isLoading) {
      closeModal()
    }
  }, [isLoading])

  return (
    <>
      <button onClick={openModal} className={buttonClassName}>
        Buy Ticket
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto bg-black/70">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex h-full w-full max-w-xl flex-col gap-5 overflow-hidden rounded-2xl bg-xeat-dark-grey p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-end">
                    <button onClick={closeModal}>
                      <CloseOutlined className="rounded-full border border-xeat-light-blue p-2 text-xeat-light-blue" />
                    </button>
                  </div>

                  <div className="flex gap-5">
                    <div className="aspect-square h-fit basis-[25%] overflow-hidden rounded-xl bg-xeat-dark-blue">
                      <img src={data?.venueImage} alt="venue" className="aspect-square w-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-4">
                      <h1 className="text-xl font-bold">{data?.name}</h1>
                      <div className="flex gap-5">
                        <span className="rounded bg-xeat-green px-7 font-bold">0/{Number(data?.maxSupply)}</span>
                        <div className="rounded font-bold">{Number(data?.pricePerNFT) / 1e18} MATIC</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center gap-10 divide-x-[1px] divide-xeat-grey">
                    <div className="flex flex-col items-center">
                      <h2 className="font-medium">Event</h2>
                      <p className="text-sm text-xeat-grey">Concert</p>
                    </div>
                    <div className="-mr-5 flex flex-col items-center pl-5">
                      <h2 className="font-medium">Artist</h2>
                      <p className="text-sm text-xeat-grey">{data?.name}</p>
                    </div>
                    <div className="flex flex-col items-center pl-5">
                      <h2 className="font-medium">Rarity NFT Chance</h2>
                      <p className="text-sm text-xeat-grey">Epic</p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-[#1B292D] p-5 text-sm">
                    <h2 className="mb-1 font-medium">Description</h2>
                    <p className="text-xeat-grey">{data?.description}</p>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                    }}
                    className="flex flex-col gap-4"
                  >
                    {/* <input
                      type="text"
                      name="number-input"
                      id="number-input"
                      placeholder="Input Number"
                      className="mt-10 w-full rounded-lg bg-xeat-dark-blue p-3 px-5 text-sm placeholder:text-xeat-grey focus:outline focus:outline-white"
                    /> */}
                    <button
                      className="w-full rounded-lg bg-xeat-light-blue py-2 font-bold"
                      onClick={() => {
                        onBuyNFT()
                      }}
                    >
                      {isLoading ? (
                        <LoadingOutlined />
                      ) : (
                        <>
                          <CaretRightFilled className="mr-2" />
                          <span>Buy Ticket</span>
                        </>
                      )}
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
