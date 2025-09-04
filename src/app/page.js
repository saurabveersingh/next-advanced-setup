import { DOMAIN } from "@/constants/URLs"
import { LOGO_IMAGE } from "@/constants/ImagePaths"
import { THEME_COLOR } from "@/constants/colors"

import LandingPage from "@/components/HomePage/Sections/LandingPage"
import WhyUs from "@/components/HomePage/Sections/WhyUs"

// !definition of component
/**
 *
 * @description --> Home page of the website
 * @returns Home page
 *
 */
// ! component

export const metadataBase = new URL(DOMAIN)

export const metadata = {
  title: "Retina Vault | Secure Digital Asset Storage",
  description:
    "Securely store, manage, and share your digital assets with Retina Vault. Instant biometric verification with encrypted storage and full auditability—built for healthcare and fintech.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico"
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Retina Vault",
    description:
      "Securely store, manage, and share your digital assets with Retina Vault.",
    images: [
      {
        url: LOGO_IMAGE,
        width: 1200,
        height: 630,
        alt: "Retina Vault Logo"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Retina Vault",
    description:
      "Securely store, manage, and share your digital assets with Retina Vault.",
    images: [LOGO_IMAGE]
  }
}

export const viewport = {
  width: "device-width",
  initialScale: 1
}

export const themeColor = THEME_COLOR

const Home = () => {
  return (
    <>
      {/* hidden seo heading */}
      <h1 className="d-none">
        Securely store, manage, and share your digital assets with Retina Vault!
      </h1>
      <LandingPage />
      <WhyUs />
    </>
  )
}

export default Home
