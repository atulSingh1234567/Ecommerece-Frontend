import React,{useEffect, useState} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import { CrossContextProvider } from './contexts/Context'
import Footer from './components/footer/Footer.jsx';


export default function Layout() {
  const [click , setClick] = useState(false);
  const [user,setUser] = useState({});
  const [userPhone , setUserPhone] = useState('');
  const [prodCount , setProdCount] = useState(0)
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [forPaymentProd,setForPaymentProd] = useState({})
  const myUser = (userData)=>{
    setUser(userData)
  }
  const myProdCount = (Count)=>{
    setProdCount(Count)
  }

  // console.log(user)

  return (
    <CrossContextProvider value={{isLoggedIn,setUserPhone,setIsLoggedIn,userPhone, prodCount, setProdCount , click,user,myUser:(arg)=>myUser(arg),setClick,forPaymentProd,setForPaymentProd}}>
      <Navbar />
      <Outlet />
      <Footer />
    </CrossContextProvider>
  )
}
