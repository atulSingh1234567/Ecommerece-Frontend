import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import { CrossContextProvider } from './contexts/Context'
import Footer from './components/footer/Footer.jsx';

export default function Layout() {
  const [click , setClick] = useState(false);
   

  return (
    <CrossContextProvider value={{click , setClick}}>
      <Navbar />
      <Outlet />
      <Footer />
    </CrossContextProvider>
  )
}
