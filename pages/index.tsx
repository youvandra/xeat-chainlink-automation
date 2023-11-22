import Image from "next/image"
import PlayIcon from "components/icons/play"
import MainLayout from "pages/layout"

function HomePage() {
  return (
    <MainLayout>
      <div className="from-xeat-black to-xeat-dark-blue flex h-screen flex-col bg-gradient-to-r">
        <section className="flex w-full justify-end gap-5 p-10 pb-0">
          <div className="bg-xeat-dark-grey rounded-xl px-7 py-1">0x34...8f8a</div>
          <div className="bg-xeat-light-blue rounded-xl px-7 py-1">50 ETH</div>
        </section>
        <section className="relative z-0 flex h-full grow flex-col items-center justify-center gap-10 text-center">
          <div className="absolute bottom-0 right-0 -z-10 aspect-[16/12] w-1/2">
            <Image src={"/assets/images/homepage-x-image.png"} alt={"x image"} fill />
          </div>

          <div className="text-5xl">
            <h1 className="text-xeat-light-blue font-bold tracking-widest">XEAT</h1>
            <p>Save your tickets as an NFT collections.</p>
          </div>
          <p className="text-xl font-bold">
            Elevate Your Experience, Secure Your Memories <br /> Transforming Tickets into Dynamic NFTs.
          </p>
          <button className="bg-xeat-light-blue flex items-center gap-2 rounded-lg px-10 py-3">
            <PlayIcon className="fill-white" /> Explore NFT Tickets
          </button>
        </section>
      </div>
    </MainLayout>
  )
}

export default HomePage
