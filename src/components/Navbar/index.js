"use client"

import { useContext } from "react"

import { DeviceContext } from "@/stores/global/DeviceStore"

import { LOGO_IMAGE } from "@/constants/ImagePaths"

import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

// !definition of component
/**
 *
 * @description --> Used to navigate through the website
 * @returns Navbar component
 *
 */
// ! component

const MENU_ITEMS = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Our Team",
    link: "/about-us"
  },
  {
    name: "Demo",
    link: "/demo"
  },
  {
    name: "Contact Us",
    link: "/contact-us"
  }
]

const Navbar = () => {
  const Device = useContext(DeviceContext)

  const NAV_LOGO = Device.isBigScreen
    ? { width: 150, height: 100 }
    : { width: 75, height: 50 }

  return (
    <header className={`text-white fw-600 z-index-max`}>
      {Device.isMobile ? (
        <MobileNav
          logoImage={LOGO_IMAGE}
          navLogo={NAV_LOGO}
          menuItems={MENU_ITEMS}
        />
      ) : (
        <DesktopNav
          logoImage={LOGO_IMAGE}
          navLogo={NAV_LOGO}
          menuItems={MENU_ITEMS}
        />
      )}
    </header>
  )
}

export default Navbar
