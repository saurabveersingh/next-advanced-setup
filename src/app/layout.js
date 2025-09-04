import DeviceStore from "@/stores/global/DeviceStore"
import MutableStore from "@/stores/global/MutableStore/MutableStore"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ToastMessage from "@/components/ToastMessage"

import "bootstrap/dist/css/bootstrap.min.css"
import "@/styles/global.scss"
import CookiesConsent from "@/components/CookiesConsent"

// !definition of component
/**
 *
 * @description --> Layout of the website pages
 * @returns Root Layout
 *
 */
// ! component

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      {/* Remove suppressHydrationWarning after disabling all browser extensions to check for real hydration errors */}
      <body suppressHydrationWarning={true}>
        <DeviceStore>
          <MutableStore>
            {/* WebPage Container */}
            <div className="d-flex flex-column min-h-100vh">
              <Navbar />
              <main>
                <ToastMessage />
                {children}
                <CookiesConsent />
              </main>
              <Footer />
            </div>
          </MutableStore>
        </DeviceStore>
      </body>
    </html>
  )
}

export default RootLayout
