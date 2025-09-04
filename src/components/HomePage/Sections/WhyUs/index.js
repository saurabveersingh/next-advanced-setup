"use client"

import { useContext } from "react"

import { DeviceContext } from "@/stores/global/DeviceStore"

import Icon from "@/components/custom-components/Icon"

import Style from "./style.module.scss"

// !definition of component
/**
 *
 * @description --> Why Us section for Home Page of the website
 * @returns Why Us Section
 *
 */
// ! component

const REASONS = [
  {
    icon: "clock",
    heading: "Sub-second verification",
    content: "Optimized ONNX Runtime pipeline, p95 < 2s under load."
  },
  {
    icon: "shield",
    heading: "Encrypted & audited",
    content: "Secure templates, audit logs, GDPR/HIPAA-ready."
  },
  {
    icon: "building",
    heading: "Built for critical access",
    content: "Hospitals, labs, banking approvals."
  }
]

const WhyUs = () => {
  const Device = useContext(DeviceContext)

  return (
    <section
      className={`d-flex flex-column justify-content-center align-items-center text-center py-4 ${Style.why_us_section}`}
    >
      <div>
        <h2 className={`fs-40px mb-4 p-2 text-4 fw-900 ts-2`}>
          Why Choose Retina Vault?
        </h2>
        <p className="text-3 fs-20px mb-4 p-2 ts-1">
          Advanced biometric security designed for mission-critical applications
        </p>
      </div>
      <div
        className={`d-flex w-90vw mt-4 ${Device.isMobile ? "flex-column" : "justify-content-evenly"}`}
      >
        {REASONS.map((reason, index) => {
          return (
            <div
              key={`why-us-reason-${index}`}
              className={`d-flex flex-column justify-content-center align-items-center p-4 br-10px bs-1 ${Device.isMobile ? "mb-4" : "w-25vw"}`}
            >
              <div className="icon-holder-1 mb-4">
                <Icon name={reason.icon} />
              </div>
              <h3 className="text-4 fs-20px fw-800 mb-4">{reason.heading}</h3>
              <p className="text-3 fs-16px mb-0">{reason.content}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default WhyUs
