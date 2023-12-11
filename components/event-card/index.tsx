"use client"

import { RightOutlined } from "@ant-design/icons"
import Link from "next/link"
import { HTMLAttributes } from "react"
import FilterChip from "components/filter-chip"
import { useCountdown } from "hooks/useCountdown"
import { EventDetails } from "pages/events"

interface IEventCard extends HTMLAttributes<HTMLDivElement> {
  href: string
  data: EventDetails
}

function EventCard({ href, data, ...props }: IEventCard) {
  const [days, hours, minutes, seconds] = useCountdown(data)

  return (
    <div {...props} className="flex flex-col gap-3 overflow-hidden rounded-xl bg-xeat-dark-blue">
      <div className="aspect-[4/3] w-full overflow-hidden bg-xeat-dark-grey">
        <img src={data.eventImage} alt="image" className="aspect-[4/3] h-full w-full object-cover" />
      </div>
      <div className="flex flex-col gap-2 px-3">
        <div className="flex items-center justify-between gap-2">
          <div className="h-12 w-12 overflow-hidden rounded-full bg-xeat-dark-grey">
            <img src={data.venueImage} alt="image" className="h-12 w-12  object-cover" />
          </div>
          <FilterChip filter={data.featured ? "featured" : "live"} />
        </div>
        <div className="flex items-center justify-between gap-2">
        <span className="font-medium">
          {data.name.length > 15 ? `${data.name.substring(0, 10)}...` : data.name}
        </span>

          <div className="rounded-full border border-xeat-grey px-8 py-1 text-xs font-bold text-xeat-grey">Concert</div>
        </div>

        {/**
         * @leo, please add count down to this  html
         * use data.startDate and data.endDate
         * the data is in milisecond
         *
         * to use this please install metamask extension on your wallet
         */}

      </div>
      <div className="flex whitespace-nowrap text-sm">
        <div className="basis-[40%] bg-xeat-teal p-3 text-center font-bold">
          {Number(data?.pricePerNFT) / 10 ** 18} MATIC
        </div>
        <Link
          href={href}
          className="flex basis-[60%] cursor-pointer items-center justify-center gap-1 bg-xeat-light-blue p-3 text-xs"
        >
          <span>SEE DETAILS</span> <RightOutlined />
        </Link>
      </div>
    </div>
  )
}

export default EventCard
