import Link from "next/link"
import { usePathname } from "next/navigation"
import GiftIcon from "components/icons/gift"
import HelpCircleIcon from "components/icons/help-circle"
import HomeIcon from "components/icons/home"
import StarIcon from "components/icons/star"
import UserIcon from "components/icons/user"
import XeatLogoIcon from "components/icons/xeat-logo"

function SideBar() {
  const path = usePathname()

  return (
    <nav className="fixed flex h-screen basis-[10%] flex-col items-center justify-between gap-12 bg-xeat-dark-blue p-5 pr-0 text-white">
      <div className="flex w-full flex-col items-center gap-12">
        <Link href={"/"} className="w-full pr-5">
          <XeatLogoIcon className="w-full fill-white" />
        </Link>
        <div className="flex w-full flex-col gap-5">
          <Link href={"/"} className={`flex justify-center rounded-l-xl py-4 pr-5 ${path === "/" && "bg-xeat-black"}`}>
            <HomeIcon className={`h-7 w-7 ${path === "/" ? "stroke-white" : "stroke-xeat-grey"}`} />
          </Link>
          <Link
            href={"/marketplace"}
            className={`flex justify-center rounded-l-xl py-4 pr-5 ${path === "/marketplace" && "bg-xeat-black"}`}
          >
            <GiftIcon className={`h-7 w-7 ${path === "/marketplace" ? "stroke-white" : "stroke-xeat-grey"}`} />
          </Link>
          <Link
            href={"/mycollections"}
            className={`flex justify-center rounded-l-xl py-4 pr-5 ${path === "/mycollections" && "bg-xeat-black"}`}
          >
            <StarIcon className={`h-7 w-7 ${path === "/mycollections" ? "stroke-white" : "stroke-xeat-grey"}`} />
          </Link>
          <Link
            href={"/events"}
            className={`flex justify-center rounded-l-xl py-4 pr-5 ${path === "/events" && "bg-xeat-black"}`}
          >
            <UserIcon className={`h-7 w-7 ${path === "/events" ? "stroke-white" : "stroke-xeat-grey"}`} />
          </Link>
        </div>
      </div>

      <Link href={"/"} className={`flex justify-center rounded-l-xl py-4 pr-5`}>
        <HelpCircleIcon className={`h-7 w-7 stroke-xeat-grey`} />
      </Link>
    </nav>
  )
}

export default SideBar
