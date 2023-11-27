import { ConfigProvider } from "antd"
import { usePathname, useRouter } from "next/navigation"
import { ReactNode, useEffect } from "react"
import SideBar from "components/sidebar"
import { useWalletContext } from "context/wallet-context"
import { truncateText } from "utils/function"

export interface IMainLayout {
  children: ReactNode
}

function MainLayout({ children }: IMainLayout) {
  const { isConnected, address, accountBalance } = useWalletContext()
  const route = useRouter()
  const pathName = usePathname()

  const generateName = () => {
    switch (pathName) {
      case "/":
        return "Home"
      case "/mycollections":
        return "My Collection"
      case "/marketplace":
        return "Marketplace"
      case "/events":
        return "Events"
      default:
        return "Event Detail"
    }
  }

  useEffect(() => {
    if (isConnected === false) {
      route.push("/login")
    }
  }, [isConnected])

  return (
    <ConfigProvider
      theme={{
        components: {
          Collapse: {
            headerBg: "#1B292D",
            contentBg: "#21424B",
            colorTextHeading: "#ffffff",
            colorText: "#A6ABAC",
          },
        },
      }}
    >
      <div className="mx-auto flex max-w-screen-2xl text-white">
        <SideBar />
        <main className="ml-20 w-full">
          <section className="flex w-full flex-wrap items-center justify-between gap-5 p-5 md:p-10">
            <h2 className="text-2xl font-semibold uppercase">{generateName()}</h2>
            <div className="flex gap-5">
              <div className="rounded-xl bg-xeat-dark-grey px-7 py-1">
                {address ? truncateText(address as string, 10) : ""}
              </div>
              <div className="rounded-xl bg-xeat-teal px-7 py-1">
                {accountBalance ? truncateText(accountBalance?.formatted as string, 10) : "-"} {accountBalance?.symbol}
              </div>
            </div>
          </section>
          {children}
        </main>
      </div>
    </ConfigProvider>
  )
}

export default MainLayout
