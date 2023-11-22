import { HTMLAttributes } from "react"

function MarketPlaceCard(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className="flex flex-col gap-3 rounded-xl bg-xeat-dark-grey p-3">
      <div className="aspect-square w-full rounded-lg bg-xeat-dark-blue"></div>
      <div>
        <h3 className="line-clamp-1 font-bold">Travala.com</h3>
        <p className="line-clamp-1 text-sm text-xeat-grey">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, error!
        </p>
      </div>
      <div className="mt-3 flex items-end justify-between gap-3">
        <span className="font-bold">0.3 ETH</span>
        <button className="rounded-md bg-xeat-green px-7 py-1 text-xs">Buy</button>
      </div>
    </div>
  )
}

export default MarketPlaceCard
