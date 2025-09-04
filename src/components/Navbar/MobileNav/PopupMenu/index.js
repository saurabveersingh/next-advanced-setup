"use client"

import { useContext } from "react"
import PropTypes from "prop-types"
import Link from "next/link"

import { MutableContext } from "@/stores/global/MutableStore/MutableStore"
import { TOAST_MESSAGE } from "@/stores/global/MutableStore/MutableActions"

import Style from "./style.module.scss"

// !definition of component
/**
 *
 * @param props  --> menuItems, openMenu, menuRef
 * @description --> Used to quickly import commonly used Icons
 * @returns Icons component
 *
 */
// ! component

const PopupMenu = ({ menuItems, openMenu, menuRef }) => {
  const [state, dispatch] = useContext(MutableContext)

  return (
    <>
      <div
        className={`${openMenu ? "d-flex" : "d-none"} justify-content-center`}
      >
        <hr className="m-0 w-80vw text-3-dark" />
      </div>
      <div
        ref={menuRef}
        className={`d-flex flex-column align-items-center justify-content-between nav-mobile-menu bg-nav bs-1 ${Style.mobile_menu} ${openMenu && Style.open_menu}`}
      >
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
        <button
          className={`br-10px w-fit-content button-1 mb-3 mt-2`}
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
    </>
  )
}

PopupMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired,
  openMenu: PropTypes.bool.isRequired,
  menuRef: PropTypes.shape({ current: PropTypes.any }).isRequired
}

export default PopupMenu
