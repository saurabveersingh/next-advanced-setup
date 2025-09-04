import { LOGO_IMAGE } from "@/constants/ImagePaths"
import { DOMAIN } from "@/constants/URLs"
import { THEME_COLOR } from "@/constants/colors"

// !definition of component
/**
 *
 * @description --> Cookies Policy page of the website
 * @returns Cookies Policy page
 *
 */
// ! component

export const metadataBase = new URL(DOMAIN)

export const metadata = {
  title: "Retina Vault - Cookies Policy",
  description: "Cookies Policy for use of Retina Vault.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico"
  },
  openGraph: {
    type: "website",
    url: `${DOMAIN}/cookies-policy`,
    title: "Retina Vault - Cookies Policy",
    description: "Cookies Policy for use of Retina Vault.",
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
    url: `${DOMAIN}/cookies-policy`,
    title: "Retina Vault - Cookies Policy",
    description: "Cookies Policy for use of Retina Vault.",
    images: [LOGO_IMAGE]
  }
}

export const viewport = {
  width: "device-width",
  initialScale: 1
}

export const themeColor = THEME_COLOR

const CookiesPolicyPage = () => {
  return (
    <>
      {/* hidden seo heading */}
      <h1 className="d-none">Cookies Policy for use of Retina Vault.</h1>
      {/* Do Not Use h1 after this point */}
      <div>Cookies Policy Page is yet to be Implemented</div>
    </>
  )
}

export default CookiesPolicyPage
