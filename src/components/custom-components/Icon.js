"use client"

import { useContext } from "react"
import PropTypes from "prop-types"

import { DeviceContext } from "@/stores/global/DeviceStore"

// !definition of component
/**
 *
 * @param props  --> name, size, strokeWidth, className
 * @description --> Used to quickly import commonly used Icons
 * @returns Icons component
 *
 */
// ! component

const paths = {
  "external-link": (
    <>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </>
  ),
  download: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
  shield: (
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  ),
  building: (
    <>
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </>
  )
}

const Icon = ({ name, size = 24, strokeWidth = 2, className = "" }) => {
  const Device = useContext(DeviceContext)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={Device.isBigScreen ? size * 2 : size}
      height={Device.isBigScreen ? size * 2 : size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-${name} ${className}`}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

// PropTypes validation
Icon.propTypes = {
  name: PropTypes.oneOf(["external-link", "download"]).isRequired,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  className: PropTypes.string
}

export default Icon
