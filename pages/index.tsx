import Image from "next/image"
import PlayIcon from "components/icons/play"
import MainLayout from "pages/layout"

function HomePage() {
  return (
    <MainLayout>
      <div className="flex h-screen basis-[80%] flex-col bg-gradient-to-r from-xeat-black to-xeat-dark-blue">
        <section className="relative z-0 flex h-full grow flex-col items-center justify-center gap-10 text-center">
          <div className="absolute bottom-0 right-0 -z-10 aspect-[16/12] w-1/2">
            <Image src={"/assets/images/homepage-x-image.png"} alt={"x image"} fill />
          </div>

          <div className="text-2xl md:text-5xl">
            <h1 className="font-bold tracking-widest text-xeat-light-blue">XEAT</h1>
            <p>Save your tickets as an NFT collections.</p>
          </div>
          <p className="text-sm font-bold md:text-xl">
            Elevate Your Experience, Secure Your Memories <br /> Transforming Tickets into Dynamic NFTs.
          </p>
          <button className="flex items-center gap-2 rounded-lg bg-xeat-light-blue px-10 py-3 text-sm md:text-base">
            <PlayIcon className="fill-white" /> Explore NFT Tickets
          </button>
        </section>
      </div>
    </MainLayout>
  )
}

export default HomePage
