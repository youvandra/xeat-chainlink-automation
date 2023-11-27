"use client"

import { BellOutlined, HeartOutlined, LeftOutlined } from "@ant-design/icons"
import { Collapse, message } from "antd"
import dayjs from "dayjs"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useContractRead, UseContractWriteConfig, usePrepareContractWrite } from "wagmi"
import abi from "abi/abi.json"
import GithubIcon from "components/icons/github"
import InternetIcon from "components/icons/internet"
import TelegramIcon from "components/icons/telegram"
import TwitterIcon from "components/icons/twitter"
import { useWalletContext } from "context/wallet-context"
import useWrite from "hooks/useWrite"
import MainLayout from "pages/layout"
import EventDetailModal from "./modal"

export interface EventDetails {
  name: string
  description: string
  about: string
  eventImage: string
  venueImage: string
  featured: boolean
  maxSupply: number
  terms: string
  pricePerNFT: bigint
  endDate: number
  startDate: number
}

function EventDetailPage() {
  const param = useParams()
  const { address } = useWalletContext()
  const [data, setData] = useState<null | EventDetails>(null)

  const { config } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_SMART_CONTRACT as `0x${string}`,
    abi: abi,
    functionName: "mintTicket",
    args: [
      address, // address wallet
      param?.id, // id
    ],
  }) as unknown as {
    config: UseContractWriteConfig
  }

  const {
    data: { isLoading, error, isSuccess },
    write,
  } = useWrite(config)

  const { refetch: getEventDetail } = useContractRead({
    address: process.env.NEXT_PUBLIC_SMART_CONTRACT as `0x${string}`,
    abi: abi,
    functionName: "events",
    args: [Number(param?.id)],
  })

  const onBuyNFT = () => {
    write?.()
  }

  const getData = async () => {
    console.log("GETTTTT")
    const { data }: { data: any } = await getEventDetail?.()
    console.log(data, "data")
    const detail = data?.[2]
    setData(detail)
  }

  useEffect(() => {
    setTimeout(() => {
      getData()
    }, 2000)
  }, [])

  useEffect(() => {
    if (error) {
      message.error("Error while interact with smart contract")
    }
  }, [error])

  useEffect(() => {
    if (isSuccess) {
      message.success("Transaction success")
      getData()
    }
  }, [isSuccess])

  return (
    <MainLayout>
      <div className="flex flex-col bg-gradient-to-r from-xeat-black to-xeat-dark-blue">
        <div className="w-full px-5 md:px-10">
          <Link
            href={"/events"}
            className="flex w-fit items-center gap-2 rounded-md bg-xeat-dark-grey px-5 py-2 text-xeat-light-blue"
          >
            <LeftOutlined className="text-xeat-light-blue" />
            Back
          </Link>
        </div>
        <section className="flex flex-col gap-10 p-5 md:flex-row md:px-10">
          <div className="flex basis-[60%] flex-col gap-5 rounded-2xl bg-xeat-dark-grey p-5">
            <div className="flex w-full flex-col gap-5 md:flex-row">
              <div className="aspect-square basis-[25%] overflow-hidden rounded-xl bg-xeat-dark-blue">
                <img src={data?.eventImage} alt="venue" className="aspect-square w-full object-cover" />
              </div>
              <div className="flex basis-[75%] justify-between gap-3">
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-medium">{data?.name}</h1>
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
              <p className="text-sm text-xeat-grey">{data?.about}</p>
            </div>
            <div>
              <h2 className="font-medium">How to Participate</h2>
              <p className="text-sm text-xeat-grey">{data?.description}</p>
            </div>
            <div>
              <h2 className="mb-2 font-medium">Venue</h2>
              <div className="aspect-square w-full overflow-hidden rounded-xl bg-xeat-dark-blue">
                <img src={data?.venueImage} alt="venue" className="aspect-square w-full object-cover" />
              </div>
            </div>
            <Collapse
              bordered={false}
              items={[
                {
                  key: "1",
                  label: "Terms & Conditions",
                  headerClass: "font-medium",
                  children: <p>{data?.terms}</p>,
                },
              ]}
            />
          </div>
          <div className="flex basis-[40%] flex-col gap-5">
            <h2 className="text-xl font-medium">Tickets</h2>
            <div className="flex w-full flex-col gap-10 rounded-2xl border-1.5 border-xeat-dark-grey p-5">
              <div className="flex flex-col gap-5 md:flex-row">
                <div className="aspect-square h-fit basis-[30%] overflow-hidden rounded-xl bg-xeat-dark-grey">
                  <img src={data?.venueImage} alt="venue" className="aspect-square w-full object-cover" />
                </div>
                <div className="flex basis-[70%] flex-col gap-2">
                  <h1 className="text-lg font-medium">{data?.name}</h1>
                  <p className="text-xs">
                    <span className="font-medium text-xeat-grey">Ending:</span>{" "}
                    <span className="font-bold">
                      {dayjs(Number(data?.endDate as number) * 1000).format("DD/MM/YYYY")}
                    </span>
                  </p>
                  <div className="flex justify-between gap-4">
                    <span className="text-lg font-bold">Entries</span>
                    <span className="text-lg font-bold text-xeat-light-blue">0/{Number(data?.maxSupply)}</span>
                  </div>
                  <div className="h-8 rounded-full border-1.5 border-xeat-dark-grey p-1">
                    <div
                      className={`h-full w-[10%] rounded-full bg-gradient-to-r from-xeat-teal to-xeat-light-blue`}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <EventDetailModal
                  buttonClassName="bg-[#139BAD] rounded-lg py-2 px-5"
                  isLoading={isLoading}
                  data={data}
                  onBuyNFT={onBuyNFT}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}

export default EventDetailPage
