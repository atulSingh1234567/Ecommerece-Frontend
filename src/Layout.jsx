import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import { CrossContextProvider } from './contexts/Context'

export default function Layout() {
  const [click , setClick] = useState(false);
   

  return (
    <CrossContextProvider value={{click , setClick}}>
      <Navbar />
      <Outlet />
    </CrossContextProvider>
  )
}
