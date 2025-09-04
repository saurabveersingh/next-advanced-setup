import { LOGO_IMAGE } from "@/constants/ImagePaths"
import { DOMAIN } from "@/constants/URLs"
import { THEME_COLOR } from "@/constants/colors"

// !definition of component
/**
 *
 * @description --> About Us page of the website
 * @returns About Us page
 *
 */
// ! component

export const metadataBase = new URL(DOMAIN)

export const metadata = {
  title: "Retina Vault - About Us",
  description: "Meet the Retina Vault Team!",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico"
  },
  openGraph: {
    type: "website",
    url: `${DOMAIN}/about-us`,
    title: "Retina Vault - About Us",
    description: "Meet the Retina Vault Team!",
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
    url: `${DOMAIN}/about-us`,
    title: "Retina Vault - About Us",
    description: "Meet the Retina Vault Team!",
    images: [LOGO_IMAGE]
  }
}

export const viewport = {
  width: "device-width",
  initialScale: 1
}

export const themeColor = THEME_COLOR

const AboutUsPage = () => {
  return (
    <>
      {/* hidden seo heading */}
      <h1 className="d-none">Meet the Retina Vault Team!</h1>
      {/* Do Not Use h1 after this point */}
      <div>About Us Page is yet to be Implemented</div>
    </>
  )
}

export default AboutUsPage
