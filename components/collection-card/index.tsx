import { HTMLAttributes } from "react"

function CollectionCard(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className="flex flex-col gap-3 rounded-xl bg-xeat-dark-grey p-3">
      <div className="aspect-square w-full rounded-lg bg-xeat-dark-blue"></div>
      <div>
        <h3 className="line-clamp-1 font-bold">Taylor Swift Tours</h3>
        <p className="line-clamp-1 text-sm font-medium text-xeat-grey">Taylor Swift</p>
      </div>
      <button className="rounded-md border border-xeat-grey px-7 py-2 text-xs text-xeat-grey">View details</button>
    </div>
  )
}

export default CollectionCard
