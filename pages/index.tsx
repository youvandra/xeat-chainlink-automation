import Image from "next/image"
import PlayIcon from "components/icons/play"
import MainLayout from "pages/layout"

function HomePage() {
  return (
    <MainLayout>
      <div className="flex h-screen flex-col bg-gradient-to-r from-xeat-black to-xeat-dark-blue">
        <section className="flex w-full justify-end gap-5 p-10 pb-0">
          <div className="rounded-xl bg-xeat-dark-grey px-7 py-1">0x34...8f8a</div>
          <div className="rounded-xl bg-xeat-teal px-7 py-1">50 ETH</div>
        </section>
        <section className="relative z-0 flex h-full grow flex-col items-center justify-center gap-10 text-center">
          <div className="absolute bottom-0 right-0 -z-10 aspect-[16/12] w-1/2">
            <Image src={"/assets/images/homepage-x-image.png"} alt={"x image"} fill />
          </div>

          <div className="text-5xl">
            <h1 className="font-bold tracking-widest text-xeat-light-blue">XEAT</h1>
            <p>Save your tickets as an NFT collections.</p>
          </div>
          <p className="text-xl font-bold">
            Elevate Your Experience, Secure Your Memories <br /> Transforming Tickets into Dynamic NFTs.
          </p>
          <button className="flex items-center gap-2 rounded-lg bg-xeat-light-blue px-10 py-3">
            <PlayIcon className="fill-white" /> Explore NFT Tickets
          </button>
        </section>
      </div>
    </MainLayout>
  )
}

export default HomePage
