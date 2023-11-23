import { RightOutlined } from "@ant-design/icons"
import Link from "next/link"
import { HTMLAttributes } from "react"
import FilterChip from "components/filter-chip"
import { EventFilter } from "utils/interface_type"

interface IEventCard extends HTMLAttributes<HTMLDivElement> {
  filter: EventFilter
  href: string
}

function EventCard({ filter, href, ...props }: IEventCard) {
  return (
    <div {...props} className="flex flex-col gap-3 overflow-hidden rounded-xl bg-xeat-dark-blue">
      <div className="aspect-[4/3] w-full bg-xeat-dark-grey"></div>
      <div className="flex flex-col gap-2 px-3">
        <div className="flex items-center justify-between gap-2">
          <div className="h-12 w-12 rounded-full bg-xeat-dark-grey"></div>
          <FilterChip filter={filter} />
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="font-medium">REX</span>
          <div className="rounded-full border border-xeat-grey px-8 py-1 text-xs font-bold text-xeat-grey">BSC</div>
        </div>
        <span className="text-xs text-xeat-grey">Ending in :</span>
        <div className="flex justify-center text-3xl font-bold">
          <span className="mr-2">08</span>
          <span>04</span>
          <span>:</span>
          <span>30</span>
          <span>:</span>
          <span>20</span>
        </div>
        <div className="flex justify-center gap-2 text-xs">
          <span>Days</span>
          <span>Hours</span>
          <span>Minutes</span>
          <span>Seconds</span>
        </div>
      </div>
      <div className="flex whitespace-nowrap text-sm">
        <div className="basis-[40%] bg-xeat-teal p-3 text-center font-bold">0.2 ETH</div>
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
