"use client"

import { useRef, useState, useEffect } from "react"
import PropTypes from "prop-types"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import PopupMenu from "./PopupMenu"

import Style from "./style.module.scss"

// !definition of component
/**
 *
 * @param props  --> logoImage, navLogo, menuItems
 * @description --> Used to quickly import commonly used Icons
 * @returns Icons component
 *
 */
// ! component

const MobileNav = ({ logoImage, navLogo, menuItems }) => {
  const [openMenu, setOpenMenu] = useState(false)

  const menu_btn = useRef()
  const menu = useRef()

  const pathname = usePathname()

  useEffect(() => {
    setOpenMenu(false)
  }, [pathname])

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        menu.current &&
        !menu.current.contains(e.target) &&
        !menu_btn.current.contains(e.target)
      ) {
        setOpenMenu(false)
      }
    }

    document.addEventListener("click", handleOutsideClick)

    return () => document.removeEventListener("click", handleOutsideClick)
  }, [menu])

  return (
    <nav
      className={`position-fixed z-index-max ${openMenu && "nav-menu-open"}`}
    >
      <div
        className={`h-nav w-100vw d-flex justify-content-between align-items-center px-2`}
      >
        <Link href="/">
          <Image
            className="br-10px"
            src={logoImage}
            alt={"logo"}
            width={navLogo.width}
            height={navLogo.height}
          />
        </Link>
        <button
          className="position-relative"
          onClick={() => {
            setTimeout(() => {
              setOpenMenu(!openMenu)
            }, 100)
          }}
        >
          {openMenu ? (
            <span ref={menu_btn} className="fs-20px text-black me-3">
              X
            </span>
          ) : (
            <Image
              className={`${Style.menu_btn}`}
              ref={menu_btn}
              src={"/images/menu.webp"}
              alt="menu"
              width={48}
              height={30}
            />
          )}
        </button>
      </div>
      <PopupMenu
        key={openMenu}
        menuItems={menuItems}
        openMenu={openMenu}
        menuRef={menu}
      />
    </nav>
  )
}

MobileNav.propTypes = {
  logoImage: PropTypes.string.isRequired,
  navLogo: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }).isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired
}

export default MobileNav
