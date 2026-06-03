import { Outlet, useLocation } from 'react-router-dom'
import { isLightPage } from '../../lib/navigation.js'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import FloatingContact from './FloatingContact.jsx'
import ScrollToHash from './ScrollToHash.jsx'

export default function Layout() {
  const { pathname } = useLocation()
  const light = isLightPage(pathname)

  return (
    <div
      className={
        light
          ? 'min-h-screen bg-[#fbf9f8] text-[#1b1c1c]'
          : 'min-h-screen bg-[#0a0a0a] text-white'
      }
    >
      <ScrollToHash />
      <Navbar />
      <Outlet />
      <Footer />
      <FloatingContact />
    </div>
  )
}
