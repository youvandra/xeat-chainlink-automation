import { ReactNode } from "react"
import SideBar from "components/sidebar"

export interface IMainLayout {
  children: ReactNode
}

function MainLayout({ children }: IMainLayout) {
  return (
    <div className="mx-auto flex max-w-screen-2xl text-white">
      <SideBar />
      <main className="ml-20 w-full">{children}</main>
    </div>
  )
}

export default MainLayout
