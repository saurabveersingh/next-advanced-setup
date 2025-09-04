"use client"

import { useContext } from "react"
import PropTypes from "prop-types"

import { MutableContext } from "@/stores/global/MutableStore/MutableStore"
import { TOAST_MESSAGE } from "@/stores/global/MutableStore/MutableActions"

import Link from "next/link"
import Image from "next/image"

// !definition of component
/**
 *
 * @param props  --> logoImage, navLogo, menuItems
 * @description --> Navbar suitable for desktop screens
 * @returns DesktopNav component
 *
 */
// ! component

const DesktopNav = ({ logoImage, navLogo, menuItems }) => {
  const [state, dispatch] = useContext(MutableContext)

  return (
    <nav
      className={`position-fixed z-index-max w-100 d-flex justify-content-between align-items-center py-2 px-4 fs-18px`}
    >
      <div className="d-flex justify-content-start align-items-center w-25vw">
        <Link href="/">
          <Image
            className="br-10px"
            src={logoImage}
            alt={"logo"}
            width={navLogo.width}
            height={navLogo.height}
          />
        </Link>
      </div>
      <div className="d-flex align-items-center justify-content-between w-50vw">
        {menuItems.map((item, index) => {
          return (
            <Link
              key={`menu-item-${index}`}
              href={item.link}
              className={`navlink`}
            >
              {item.name}
            </Link>
          )
        })}
      </div>
      <div className="d-flex justify-content-end align-items-center w-25vw">
        <button
          className={`br-10px w-fit-content button-1`}
          onClick={() => {
            dispatch({
              type: TOAST_MESSAGE,
              payload: { type: "error", message: "Not Implemented" }
            })
          }}
        >
          See Live Demo
        </button>
      </div>
    </nav>
  )
}

DesktopNav.propTypes = {
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

export default DesktopNav
