import { LOGO_IMAGE } from "@/constants/ImagePaths"
import { DOMAIN } from "@/constants/URLs"
import { THEME_COLOR } from "@/constants/colors"

// !definition of component
/**
 *
 * @description --> Terms and Conditions page of the website
 * @returns Terms and Conditions page
 *
 */
// ! component

export const metadataBase = new URL(DOMAIN)

export const metadata = {
  title: "Retina Vault - Terms and Conditions",
  description: "Terms and Conditions related to the use of Retina Vault.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico"
  },
  openGraph: {
    type: "website",
    url: `${DOMAIN}/terms-and-conditions`,
    title: "Retina Vault - Terms and Conditions",
    description: "Terms and Conditions related to the use of Retina Vault.",
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
    url: `${DOMAIN}/terms-and-conditions`,
    title: "Retina Vault - Terms and Conditions",
    description: "Terms and Conditions related to the use of Retina Vault.",
    images: [LOGO_IMAGE]
  }
}

export const viewport = {
  width: "device-width",
  initialScale: 1
}

export const themeColor = THEME_COLOR

const TermsAndConditionsPage = () => {
  return (
    <>
      {/* hidden seo heading */}
      <h1 className="d-none">
        Terms and Conditions related to use of Retina Vault.
      </h1>
      {/* Do Not Use h1 after this point */}
      <div>Terms and Conditions Page is yet to be Implemented</div>
    </>
  )
}

export default TermsAndConditionsPage
