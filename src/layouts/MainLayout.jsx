import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppSticky from '../components/WhatsAppSticky'

function MainLayout() {
  const location = useLocation()

  useEffect(() => {
    const initLegacyScripts = async () => {
      await import('../assets/js/script.js')
      await import('../assets/js/submit-form.js')
      await import('../assets/js/video-script.js')

      if (typeof window.__fabuluxInit === 'function') {
        window.__fabuluxInit()
      }
    }

    initLegacyScripts()
  }, [location.pathname])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <WhatsAppSticky />
    </>
  )
}

export default MainLayout
