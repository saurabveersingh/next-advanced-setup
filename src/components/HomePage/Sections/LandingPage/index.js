"use client"

import { useContext } from "react"
import Image from "next/image"

import { DeviceContext } from "@/stores/global/DeviceStore"
import { MutableContext } from "@/stores/global/MutableStore/MutableStore"
import { TOAST_MESSAGE } from "@/stores/global/MutableStore/MutableActions"

import Icon from "@/components/custom-components/Icon"

import Style from "./style.module.scss"

// !definition of component
/**
 *
 * @description --> Landing page section for Home Page of the website
 * @returns Landing page section
 */
// ! component

const LandingPage = () => {
  const Device = useContext(DeviceContext)
  const [state, dispatch] = useContext(MutableContext)

  return (
    <section
      className={`position-relative bg-landing-page-img d-flex flex-column justify-content-center align-items-center text-center text-white ts-1 fw-900 ${Style.landing_page} ${
        Device.isMobile ? "flex-column" : ""
      }`}
    >
      <Image
        src="/images/home/banner.webp"
        alt={"landing-page-background"}
        fill
        className={`position-absolute w-100 section_background_image`}
      />
      <h2 className="fs-70px">Retina Vault</h2>
      <p className="fs-30px mb-4">Trust in Every Glance</p>
      <p className="fs-18px max-w-700px mb-5 w-80vw">
        Retina Vault delivers instant biometric verification with encrypted
        storage and full auditability—built for healthcare and fintech.
      </p>
      <div>
        <button
          className={`button-2 br-10px w-fit-content px-3 py-2 d-inline ${!Device.isMobile && "me-3"}`}
          onClick={() => {
            dispatch({
              type: TOAST_MESSAGE,
              payload: { type: "error", message: "Not Implemented" }
            })
          }}
        >
          <Icon name="external-link" className="mr-2 h-5 w-5" />
          <span className="ms-3">See Live Demo</span>
        </button>
        <button
          className="button-2 br-10px w-fit-content px-3 py-2 d-inline"
          onClick={() => {
            dispatch({
              type: TOAST_MESSAGE,
              payload: { type: "error", message: "Not Implemented" }
            })
          }}
        >
          <Icon name="download" className="mr-2 h-5 w-5" />
          <span className="ms-3">Download Pitch Deck</span>
        </button>
      </div>
    </section>
  )
}

export default LandingPage
