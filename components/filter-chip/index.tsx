import { EventFilter } from "utils/interface_type"

function FilterChip({ filter }: { filter: EventFilter }) {
  switch (filter) {
    case "ended":
      return (
        <div className="flex items-center gap-[5px] rounded-full bg-xeat-dark-grey px-5 py-1 text-xs font-medium">
          <div className="h-2 w-2 rounded-full bg-xeat-grey"></div>
          <span>Ended</span>
        </div>
      )
    case "featured":
      return (
        <div className="flex items-center gap-[5px] rounded-full bg-yellow-500 px-5 py-1 text-xs font-medium text-xeat-black">
          <div className="h-2 w-2 rounded-full bg-xeat-black"></div>
          <span>Featured</span>
        </div>
      )
    case "live":
      return (
        <div className="flex items-center gap-[5px] rounded-full bg-xeat-dark-grey px-5 py-1 text-xs font-medium text-green-400">
          <div className="h-2 w-2 rounded-full bg-green-400"></div>
          <span>Live</span>
        </div>
      )
  }
}

export default FilterChip
