import { DownOutlined } from "@ant-design/icons"
import { Button, Dropdown, MenuProps, Space } from "antd"
import { MenuItemType } from "antd/es/menu/hooks/useItems"
import { useState } from "react"
import SearchIcon from "components/icons/search"
import MarketPlaceCard from "components/marketplace-card"
import MainLayout from "pages/layout"
import { MarketPlaceTimeFilter } from "utils/interface_type"

function MarketPlacePage() {
  const [currentTimeFilter, setCurrenTimeFilter] = useState<MarketPlaceTimeFilter>("all")

  const items: MenuProps["items"] = [
    {
      label: "Ending Soon",
      key: "1",
    },
    {
      label: "Featured",
      key: "2",
    },
  ]

  const [currentDropdownFilter, setCurrentDropdownFilter] = useState<MenuItemType>(items[0] as MenuItemType)

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    const clickedItem = items.find((item) => item?.key === e.key) as MenuItemType
    if (clickedItem && clickedItem.label) {
      setCurrentDropdownFilter(clickedItem)
    }
  }

  const menuProps = {
    items,
    onClick: handleMenuClick,
  }
  return (
    <MainLayout>
      <div className="flex h-screen flex-col bg-gradient-to-r from-xeat-black to-xeat-dark-blue">
        <section className="flex w-full items-center justify-between gap-5 p-10">
          <h2 className="text-2xl font-semibold uppercase">Marketplace</h2>
          <div className="flex gap-5">
            <div className="rounded-xl bg-xeat-dark-grey px-7 py-1">0x34...8f8a</div>
            <div className="rounded-xl bg-xeat-light-blue px-7 py-1">50 ETH</div>
          </div>
        </section>
        <section className="px-10">
          <div className="flex items-center justify-between border-b-1.5 border-xeat-dark-grey py-5">
            <div className="flex w-full gap-5">
              <div className="flex basis-[70%] gap-2">
                {Array<MarketPlaceTimeFilter>("all", "live", "upcoming").map((item, index) => {
                  return (
                    <button
                      onClick={() => setCurrenTimeFilter(item)}
                      key={index}
                      className={`w-1/5 rounded-lg py-1 text-center capitalize ${
                        item === currentTimeFilter && "bg-xeat-dark-grey "
                      }`}
                    >
                      {item}
                    </button>
                  )
                })}

                <div className="ml-5 flex w-2/5 grow items-center gap-0 overflow-hidden rounded-full border-1.5 border-xeat-dark-grey pl-4 pr-2">
                  <SearchIcon className="h-5 w-5 fill-white" />
                  <input
                    type="text"
                    className="w-full grow bg-xeat-black p-2 placeholder:text-xeat-grey focus:outline-none "
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="flex basis-[30%] items-center justify-end">
                <Dropdown menu={menuProps}>
                  <Button className="group h-full border-1.5 border-xeat-dark-grey bg-xeat-dark-blue text-white transition-all duration-150 hover:border-white ">
                    <Space>
                      {currentDropdownFilter?.label}
                      <DownOutlined className="text-xeat-grey group-hover:text-white" />
                    </Space>
                  </Button>
                </Dropdown>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-5 gap-4 p-10">
          {[...Array(10)].map((item, index) => {
            return <MarketPlaceCard key={index} />
          })}
        </section>
      </div>
    </MainLayout>
  )
}

export default MarketPlacePage
