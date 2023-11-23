import { CaretRightFilled, CloseOutlined } from "@ant-design/icons"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"

export default function EventDetailModal({ buttonClassName }: { buttonClassName?: string }) {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

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
                    <div className="aspect-square h-fit basis-[25%] rounded-xl bg-xeat-dark-blue"></div>
                    <div className="flex flex-col gap-4">
                      <h1 className="text-xl font-bold">Taylor Swift Tour 2023</h1>
                      <div className="flex gap-5">
                        <span className="rounded bg-xeat-green px-7 font-bold">20/100</span>
                        <div className="rounded font-bold">0.3 ETH</div>
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
                      <p className="text-sm text-xeat-grey">Taylor Swift</p>
                    </div>
                    <div className="flex flex-col items-center pl-5">
                      <h2 className="font-medium">Rarity NFT Chance</h2>
                      <p className="text-sm text-xeat-grey">Epic, Legendary</p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-[#1B292D] p-5 text-sm">
                    <h2 className="mb-1 font-medium">Description</h2>
                    <p className="text-xeat-grey">
                      Embark on a mesmerizing musical journey with Taylor Swift&apos;s 2023 Tour. This spectacular
                      experience goes beyond the stage, offering a seamless blend of emotionally charged performances,
                      visually stunning productions, and intimate interactions with fans. Swift takes her audience
                      through a diverse repertoire, spanning from beloved classics to her latest hits, creating an
                      unforgettable celebration of artistry and connection.{" "}
                    </p>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                    }}
                    className="flex flex-col gap-4"
                  >
                    <input
                      type="text"
                      name="number-input"
                      id="number-input"
                      placeholder="Input Number"
                      className="mt-10 w-full rounded-lg bg-xeat-dark-blue p-3 px-5 text-sm placeholder:text-xeat-grey focus:outline focus:outline-white"
                    />
                    <button className="w-full rounded-lg bg-xeat-light-blue py-2 font-bold">
                      <CaretRightFilled className="mr-2" />
                      <span>Buy Ticket</span>
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
