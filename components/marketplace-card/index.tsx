import { HTMLAttributes } from "react"

function MarketPlaceCard(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className="bg-xeat-dark-grey flex flex-col gap-3 rounded-xl p-3">
      <div className="bg-xeat-dark-blue aspect-square w-full rounded-lg"></div>
      <div>
        <h3 className="font-bold">Travala.com</h3>
        <p className="text-xeat-grey line-clamp-1 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, error!
        </p>
      </div>
      <div className="mt-3 flex items-end justify-between gap-3">
        <span className="font-bold">0.3 ETH</span>
        <button className="bg-xeat-green rounded-md px-7 py-1 text-xs">Buy</button>
      </div>
    </div>
  )
}

export default MarketPlaceCard
