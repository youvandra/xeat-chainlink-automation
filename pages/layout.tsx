import { ConfigProvider } from "antd"
import { ReactNode } from "react"
import SideBar from "components/sidebar"

export interface IMainLayout {
  children: ReactNode
}

function MainLayout({ children }: IMainLayout) {
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
        <main className="ml-20 w-full">{children}</main>
      </div>
    </ConfigProvider>
  )
}

export default MainLayout
