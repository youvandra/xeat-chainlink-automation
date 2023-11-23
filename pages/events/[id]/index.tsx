import { BellOutlined, HeartOutlined, LeftOutlined } from "@ant-design/icons"
import { Collapse, Modal } from "antd"
import Link from "next/link"
import { useState } from "react"
import GithubIcon from "components/icons/github"
import InternetIcon from "components/icons/internet"
import TelegramIcon from "components/icons/telegram"
import TwitterIcon from "components/icons/twitter"
import MainLayout from "pages/layout"
import EventDetailModal from "./modal"

function EventDetailPage() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <MainLayout>
      {modalOpen && <div className="">asd</div>}

      <div className="flex flex-col bg-gradient-to-r from-xeat-black to-xeat-dark-blue">
        <section className="flex w-full items-center justify-between gap-5 p-10">
          <h2 className="text-2xl font-semibold uppercase">Events</h2>
          <div className="flex gap-5">
            <div className="rounded-xl bg-xeat-dark-grey px-7 py-1">0x34...8f8a</div>
            <div className="rounded-xl bg-xeat-teal px-7 py-1">50 ETH</div>
          </div>
        </section>
        <div className="w-full px-10">
          <Link
            href={"/events"}
            className="flex w-fit items-center gap-2 rounded-md bg-xeat-dark-grey px-5 py-2 text-xeat-light-blue"
          >
            <LeftOutlined className="text-xeat-light-blue" />
            Back
          </Link>
        </div>
        <section className="flex gap-10 px-10 py-5">
          <div className="flex basis-[60%] flex-col gap-5 rounded-2xl bg-xeat-dark-grey p-5">
            <div className="flex w-full gap-5">
              <div className="aspect-square basis-[25%] rounded-xl bg-xeat-dark-blue"></div>
              <div className="flex basis-[75%] justify-between gap-3">
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-medium">Taylor Swift&apos;s Tour 2024</h1>
                  <div className="w-fit rounded-full border border-xeat-grey px-2 text-sm text-xeat-grey">Featured</div>
                  <div className="flex gap-3">
                    <a href="https://ant.design/">
                      <InternetIcon className="h-6 w-6 stroke-xeat-grey" />
                    </a>
                    <a href="https://ant.design/">
                      <TwitterIcon className="h-6 w-6 fill-xeat-grey" />
                    </a>
                    <a href="https://ant.design/">
                      <TelegramIcon className="h-6 w-6 stroke-xeat-grey" />
                    </a>
                    <a href="https://ant.design/">
                      <GithubIcon className="h-6 w-6 stroke-xeat-grey" />
                    </a>
                  </div>
                </div>
                <div className="flex justify-end gap-[5px]">
                  <button className="h-8 w-8 rounded-lg bg-xeat-teal">
                    <BellOutlined />
                  </button>
                  <button className="h-8 w-8 rounded-lg bg-xeat-teal">
                    <HeartOutlined />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-medium">About</h2>
              <p className="text-sm text-xeat-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae libero iaculis, euismod augue non,
                ultricies mi. Phasellus efficitur faucibus nisi quis luctus. Morbi at nunc purus. Donec quis turpis
                risus. Nunc eget cursus nulla, id consequat felis. Vestibulum egestas orci id feugiat imperdiet. Aliquam
                erat volutpat. Nullam ultrices vulputate purus sit amet consequat. Fusce iaculis ultricies magna in
                efficitur.
              </p>
            </div>
            <div>
              <h2 className="font-medium">How to Participate</h2>
              <p className="text-sm text-xeat-grey">
                Consectetur adipiscing elit. Id enim, tellus diam pretium rhoncus velit et condimentum. Fringilla enim
                in purus at vitae, accumsan condimentum. Sed dolor feugiat aliquet et.
              </p>
            </div>
            <div>
              <h2 className="mb-2 font-medium">Venue</h2>
              <div className="aspect-video w-full rounded-xl bg-xeat-dark-blue"></div>
            </div>
            <Collapse
              bordered={false}
              items={[
                {
                  key: "1",
                  label: "Terms & Conditions",
                  headerClass: "font-medium",
                  children: (
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam itaque maxime accusamus natus
                      nobis laboriosam quaerat maiores obcaecati facilis. Sint?
                    </p>
                  ),
                },
              ]}
            />
            <Collapse
              bordered={false}
              items={[
                {
                  key: "2",
                  label: "How to make money on Freebling?",
                  headerClass: "font-medium",
                  children: (
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum saepe voluptate nam vero minus,
                      provident natus ipsam! Enim similique nam eos quasi magni obcaecati praesentium molestias aliquid
                      ex, aut error iste quae consequuntur, nostrum esse. Quibusdam expedita facilis aliquid architecto
                      unde ducimus, quia, voluptatibus tenetur fuga velit, quasi modi eos!
                    </p>
                  ),
                },
              ]}
            />
          </div>
          <div className="flex basis-[40%] flex-col gap-5">
            <h2 className="text-xl font-medium">Tickets</h2>
            <div className="flex w-full flex-col gap-10 rounded-2xl border-1.5 border-xeat-dark-grey p-5">
              <div className="flex gap-5">
                <div className="aspect-square h-fit basis-[30%] rounded-xl bg-xeat-dark-grey"></div>
                <div className="flex basis-[70%] flex-col gap-2">
                  <h1 className="text-lg font-medium">Tribune Wings I (2nd Floor)</h1>
                  <p className="text-xs">
                    <span className="font-medium text-xeat-grey">Ending:</span>{" "}
                    <span className="font-bold">10/17/2022</span>
                  </p>
                  <div className="flex justify-between gap-4">
                    <span className="text-lg font-bold">Entries</span>
                    <span className="text-lg font-bold text-xeat-light-blue">20/100</span>
                  </div>
                  <div className="h-8 rounded-full border-1.5 border-xeat-dark-grey p-1">
                    <div
                      className={`h-full w-[70%] rounded-full bg-gradient-to-r from-xeat-teal to-xeat-light-blue`}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <EventDetailModal buttonClassName="bg-[#139BAD] rounded-lg py-2 px-5" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}

export default EventDetailPage
