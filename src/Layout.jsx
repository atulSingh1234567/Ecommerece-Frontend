import React,{useEffect, useState} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import { CrossContextProvider } from './contexts/Context'
import Footer from './components/footer/Footer.jsx';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './pages/signupPage/firebase.config.js';
import axios from 'axios';

export default function Layout() {
  const [click , setClick] = useState(false);
  const [user,setUser] = useState({});
  const [userPhone , setUserPhone] = useState('');
  const [prodCount , setProdCount] = useState(0)
  const myUser = (userData)=>{
    setUser(userData)
  }
  const myProdCount = (Count)=>{
    setProdCount(Count)
  }
  const fetchUser = () => {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (authUser) => {
        if (authUser) {
          setUserPhone(authUser.phoneNumber);
        }
        resolve("fetchUser executed");
      });
    });
  };

  useEffect(
    () => {
      const fetchData = async () => {
        await fetchUser();
        if (userPhone.length > 0) {
          axios.post('http://localhost:8000/api/v1/existinguser', { signupPhoneNumber: userPhone })
            .then(
              (res) => {
                myUser(res.data)
                if(user.length > 0)
                localStorage.setItem('userId' , user[0]._id);
                // console.log(res.data)
              }
            )
            .catch(
              (err) => {
                console.log(err)
              }
            )
        }
      }
      fetchData();

    }, [userPhone]
  )
  
  // console.log(user)

  return (
    <CrossContextProvider value={{userPhone, prodCount, myProdCount:(arg)=>myProdCount(arg) , click,user,myUser:(arg)=>myUser(arg),setClick}}>
      <Navbar />
      <Outlet />
      <Footer />
    </CrossContextProvider>
  )
}
