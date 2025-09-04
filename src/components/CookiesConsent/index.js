"use client"

import { useState, useEffect, useContext } from "react"
import Link from "next/link"

import { DeviceContext } from "@/stores/global/DeviceStore"

import Style from "./style.module.scss"

const CookiesConsent = () => {
  const Device = useContext(DeviceContext)

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookies_consent")
    if (!consent) setVisible(true)
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookies_consent", "accepted")
    setVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookies_consent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className={`position-fixed bottom-0 left-0 bg-1 w-100vw z-index-max p-3 ${Style.bar}`}
    >
      <div
        className={`d-flex w-100 ${Device.isMobile ? "flex-column" : "flex-row justify-content-between align-items-center"} ${Style.content}`}
      >
        <div className={`${Device.isMobile ? "max-w-90vw" : "max-w-70vw"}`}>
          <h4 className="text-black fs-18px mb-2 fw-700">
            Your Privacy, Our Priority
          </h4>
          <p className="m-0 text-3 fs-16px">
            We use cookies to ensure Retina Vault runs securely, remembers your
            preferences, and helps us improve with reliable analytics. You can
            accept all cookies or decline to continue using our website with
            limited access. Read our{" "}
            <Link href="/cookies-policy" className={`ms-1 fw-600 text-4`}>
              Cookies Policy
            </Link>{" "}
            for more information.
          </p>
        </div>
        <div className={`d-flex ${Style.actions}`}>
          <button
            className={`px-4 py-3 br-10px fw-600 fs-16px button-1`}
            onClick={declineCookies}
          >
            Decline
          </button>
          <button
            className={`px-4 py-3 br-10px fw-600 fs-16px button-3`}
            onClick={acceptCookies}
          >
            Accept All Cookies
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookiesConsent
