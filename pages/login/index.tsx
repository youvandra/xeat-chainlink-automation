import { CloseOutlined } from "@ant-design/icons"
import Image from "next/image"
import XeatTextLogoIcon from "components/icons/xeat-text-logo"

function LoginPage() {
  return (
    <main className="flex items-center justify-center bg-black">
      <div className="my-10 flex w-2/3 overflow-hidden rounded-2xl bg-black">
        <section className="flex basis-1/2 flex-col items-center justify-center gap-2 bg-gradient-to-r from-xeat-black to-xeat-dark-blue p-5">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-xeat-dark-grey p-4">
            Connect
            <div className="relative h-5 w-5">
              <Image src={"/assets/images/metamask-logo.png"} alt="Metamask logo" fill />
            </div>
            Metamask
          </button>
          <p className="text-xeat-grey">Don&apos;t have metamask? Install here.</p>
        </section>
        <section className="flex basis-1/2 flex-col items-center justify-between gap-2 bg-xeat-black p-5">
          <div>
            <div className="mb-10 flex justify-end">
              <button className="translate-x-5">
                <CloseOutlined className="rounded-full bg-xeat-dark-grey p-2 text-xeat-light-blue" />
              </button>
            </div>
            <div className="flex flex-col items-center text-center">
              <XeatTextLogoIcon className="mb-7 w-32 fill-white" />
              <h1 className="text-2xl font-medium">Welcome to Xeat!</h1>
              <p className="text-xeat-grey">
                Hey, we’re happy to have you here! <br /> In order to create your accounts fill in the fields.
              </p>
            </div>
          </div>
          <div className="relative aspect-[16/17] w-full translate-y-8 brightness-75">
            <Image src={"/assets/images/login-cards.png"} alt="Cards" fill />
          </div>
        </section>
      </div>
    </main>
  )
}

export default LoginPage
