import { LOGO_IMAGE } from "@/constants/ImagePaths"
import { DOMAIN } from "@/constants/URLs"
import { THEME_COLOR } from "@/constants/colors"

// !definition of component
/**
 *
 * @description --> Demo page of the website
 * @returns Demo page
 *
 */
// ! component

export const metadataBase = new URL(DOMAIN)

export const metadata = {
  title: "Retina Vault - Demo",
  description:
    "Reach out to Retina Vault Experts for a personalised demonstration!",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico"
  },
  openGraph: {
    type: "website",
    url: `${DOMAIN}/demo`,
    title: "Retina Vault - Demo",
    description:
      "Reach out to Retina Vault Experts for a personalised demonstration!",
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
    url: `${DOMAIN}/demo`,
    title: "Retina Vault - Demo",
    description:
      "Reach out to Retina Vault Experts for a personalised demonstration!",
    images: [LOGO_IMAGE]
  }
}

export const viewport = {
  width: "device-width",
  initialScale: 1
}

export const themeColor = THEME_COLOR

const DemoPage = () => {
  return (
    <>
      {/* hidden seo heading */}
      <h1 className="d-none">
        Reach out to Retina Vault Experts for a personalised demonstration!
      </h1>
      {/* Do Not Use h1 after this point */}
      <div>Demo Page is yet to be Implemented</div>
    </>
  )
}

export default DemoPage
