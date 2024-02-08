import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../pages/signupPage/firebase.config';
import { signOut } from 'firebase/auth';
import toast, {Toaster} from 'react-hot-toast'
import { onAuthStateChanged } from 'firebase/auth';

export default function HoverComp(props) {
  const navigate = useNavigate();
  const [user , setUser]  = useState({})
   
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth , (authUser) => {
       if (authUser) {
         
         setUser(authUser);
       } else {
         setUser(null);
       }
     });
 
     return () => unsubscribe();
   }, []);

    
  const phoneNumber = user? user.phoneNumber : null;
  const logOutUser = ()=>{
    signOut(auth).then(() => {
       toast.success('Logged out successfully')
       navigate('/login')
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className={`flex border right-6 relative bottom-2 z-50 gap-1 text-black flex-col bg-white rounded shadow-xl w-64`}>
    { props.show &&  <div className='border-b border-gray-300 flex justify-evenly p-3'>
        {
           phoneNumber == null ? 'New Customer?' : 'Welcome'
        }
        {
          phoneNumber == null ? <Link className='text-blue-700 text-lg font-bold' to="/signup">Sign up</Link> : <i>{user.phoneNumber}</i> 
        }
      </div>
    }

    <Toaster />

      <div className='flex flex-col gap-2 p-3'>
        {
          props.elements.map(function (items, index) {
            return (
              <Link key={index} to={`/${items.title.toLowerCase().replace(' ', '')}`}>
              <span onClick={index == 3? logOutUser : ()=>{null}}  className='flex text-lg gap-2'>
                {items.element}
                {items.title}
              </span>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}