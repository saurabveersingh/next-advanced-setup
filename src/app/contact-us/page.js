import { LOGO_IMAGE } from "@/constants/ImagePaths"
import { DOMAIN } from "@/constants/URLs"
import { THEME_COLOR } from "@/constants/colors"

// !definition of component
/**
 *
 * @description --> Contact Us page of the website
 * @returns Contact Us page
 *
 */
// ! component

export const metadataBase = new URL(DOMAIN)

export const metadata = {
  title: "Retina Vault - Contact Us",
  description: "Reach out to Retina Vault team if you have any questions!",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico"
  },
  openGraph: {
    type: "website",
    url: `${DOMAIN}/contact-us`,
    title: "Retina Vault - Contact Us",
    description: "Reach out to Retina Vault team if you have any questions!",
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
    url: `${DOMAIN}/contact-us`,
    title: "Retina Vault - Contact Us",
    description: "Reach out to Retina Vault team if you have any questions!",
    images: [LOGO_IMAGE]
  }
}

export const viewport = {
  width: "device-width",
  initialScale: 1
}

export const themeColor = THEME_COLOR

const ContactUsPage = () => {
  return (
    <>
      {/* hidden seo heading */}
      <h1 className="d-none">
        Reach out to Retina Vault team if you have any questions!
      </h1>
      {/* Do Not Use h1 after this point */}
      <div>Contact Us Page is yet to be Implemented</div>
    </>
  )
}

export default ContactUsPage
