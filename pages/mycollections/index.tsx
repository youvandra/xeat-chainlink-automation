import CollectionCard from "components/collection-card"
import SearchIcon from "components/icons/search"
import MainLayout from "pages/layout"

function MyCollectionsPage() {
  return (
    <MainLayout>
      <div className="flex h-screen flex-col bg-gradient-to-r from-xeat-black to-xeat-dark-blue">
        <section className="flex w-full items-center justify-between gap-5 p-10">
          <h2 className="text-2xl font-semibold uppercase">NFT Collections</h2>
          <div className="flex gap-5">
            <div className="rounded-xl bg-xeat-dark-grey px-7 py-1">0x34...8f8a</div>
            <div className="rounded-xl bg-xeat-light-blue px-7 py-1">50 ETH</div>
          </div>
        </section>
        <section className="flex flex-col gap-5 px-10">
          <div className="flex w-2/5 items-center gap-0 overflow-hidden rounded-full border-1.5 border-xeat-dark-grey pl-4 pr-2">
            <SearchIcon className="h-5 w-5 fill-white" />
            <input
              type="text"
              className="w-full grow bg-xeat-black p-2 placeholder:text-xeat-grey focus:outline-none "
              placeholder="Search"
            />
          </div>
          <h2 className="text-xl font-medium">All Collections</h2>
          <div className="grid grid-cols-5 gap-4">
            {[...Array(10)].map((item, index) => {
              return <CollectionCard key={index} />
            })}
          </div>
        </section>
      </div>
    </MainLayout>
  )
}

export default MyCollectionsPage
