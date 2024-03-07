import React, { useState, useEffect } from 'react'
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../signupPage/firebase.config';
import { useCrossContext } from '../../contexts/Context';
import PersonIcon from '@mui/icons-material/Person';
import Person2Icon from '@mui/icons-material/Person2';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';


export default function Profile() {
  const [genderSelected, setGenderSelected] = useState(null)
  const [formData, setFormData] = useState({});
  const [finalAddress, setFinalAddress] = useState({});
  const [user  , setUser] = useState([])
  const genderSelector = (option) => {
    setGenderSelected(option === genderSelected ? null : option)
  }
  
  

  const addUser = function (e) {
    e.preventDefault();

    // const reqBody  = {
    //   finalAddress: finalAddress,
    //   formData: formData
    // }

    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setFormData({
          ...formData,
          gender: genderSelected,
          signupPhoneNumber: authUser.phoneNumber
        });
      }
    });
    
    axios.post('/api/v1/users', { formData, finalAddress })
      .then(
        (res) => {
          console.log(res.data)
        }
      )
      .catch(
        (err) => {
          console.log("Got some error", err)
        }
      )
  }




  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })


  }

  const handleAddressInput = (e) => {
    setFinalAddress({
      ...finalAddress,
      [e.target.name]: e.target.value
    })
  }

  useEffect(
    ()=>{
      axios.post('/api/v1/existinguser' , {signupPhoneNumber:localStorage.getItem('signupPhoneNumber')})
      .then(
        (res)=>{
          setUser(res.data);
        }
      )
      .catch(
        (err)=>{
          console.log(err.message)
        }
      )
    },[]
  )

  // console.log(currentUser)
  return (
    <>

     <form onSubmit={addUser}>
      <div className='flex relative justify-center gap-4 top-20 w-screen'>

        <div className='w-8/12 p-10 bg-white'>
          <div id='myDetails' className='flex flex-col w-full gap-5 px-8 py-6'>
            <h1 className='tracking-wide text-xl'>My Details</h1>
            <div className='flex flex-col gap-4 justify-center'>
             { user.length <= 0 || user.length == undefined ? <div className='flex items-center gap-2'>
                <label className='text-lg' htmlFor="username"></label>
                <input required type="text" placeholder='Type your name' name='username' className='border-[1px] rounded-xl h-10 px-1 w-[75%] border-blue-400 focus:outline-none focus:border-blue-800' value={formData.username} onChange={handleInputChange} />
                </div> : <div className='text-lg flex gap-2 items-center tracking-wide'><span>{ user[0]?.gender === "male" ? <PersonIcon/> : <Person2Icon />}</span>{user[0]?.username}</div>
             }
             { user.length <= 0 || user.length == undefined ?  <div className='flex gap-2 items-center w-full'>
                <label className='text-lg' htmlFor="email"></label>
                <input required name='email' type="text" placeholder='Type Your Email' className='border-[1px] rounded-xl border-blue-400 focus:outline-none focus:border-blue-800 h-10 px-1 w-[75%] border-black' value={formData.email} onChange={handleInputChange} />
              </div> : <div className='text-lg flex gap-2 items-center tracking-wide'><span><EmailIcon/></span>{user[0]?.email}</div>
            }
             { user.length <= 0 || user.length == undefined? <div className='flex gap-2'>
                <label className='text-lg' htmlFor="alternatePhone"></label>
                <input  type="tel" name='alternatePhone' placeholder='Alternate Phone Number' value={formData.alternatePhone} onChange={handleInputChange} className='border-[1px] h-10 border-blue-400 rounded-xl px-1 w-5/12 border-black focus:outline-none focus:border-blue-800' />
              </div> : <div className='flex gap-2 text=lg items-center tracking-wide'><span><PhoneAndroidIcon/></span>{user[0]?.alternatePhone}</div>
}
           {  user.length <= 0 || user.length == undefined? <div className='flex my-4 px-12 gap-4'>
                <span onClick={() => genderSelector('male')} className={`w-20 flex flex-col text-blue-400 hover:bg-blue-100 cursor-pointer items-center justify-center border-blue-400 rounded-xl h-20 border ${genderSelected === 'male' ? 'bg-blue-100 text-blue-500' : ''}`}>
                  <MaleIcon />
                  <p>Male</p>
                </span>
                <span onClick={() => genderSelector('female')} className={`w-20 flex flex-col text-blue-400 hover:bg-pink-100 cursor-pointer items-center justify-center border-blue-400 rounded-xl h-20 border ${genderSelected === 'female' ? 'bg-pink-100 text-pink-500' : ''}`}>
                  <FemaleIcon />
                  <p>Female</p>
                </span>
              </div> : ''
}
            </div>

          </div>
         { user.length <= 0 || user.length == undefined ?  <div id='address' className='flex flex-col justify-center'>
            <h1 className='px-8 text-xl pb-6'>My Address</h1>
           <div className='flex justify-center gap-4 items-center'>
              <label htmlFor="address"></label>
              <input name='address' value={finalAddress.address} onChange={handleAddressInput} type="text" placeholder='Your Address' className='border-[1px] rounded-xl h-10 px-1 w-7/12 border-blue-400 focus:outline-none focus:border-blue-800' />
              <label htmlFor="pincode"></label>
              <input name='pincode' value={finalAddress.pincode} onChange={handleAddressInput} type="text" placeholder='Pin Code' className='border-[1px] rounded-xl h-10 px-1 w-3/12 border-blue-400 focus:outline-none focus:border-blue-800' />
            </div> 

            <div className='flex p-4 w-full'>
              <label htmlFor="city"></label>
              <input name='city' value={finalAddress.city} onChange={handleAddressInput} type="text" placeholder='Your City' className='border-[1px] mx-[50px] rounded-xl border-blue-400 focus:outline-none focus:border-blue-800 h-10 px-1 w-[40%] border-black' />
            </div>
            <div className='flex p-4 w-full'>
              <label htmlFor="landmark"></label>
              <input name='landmark' value={finalAddress.landmark} onChange={handleAddressInput} type="text" placeholder='Nearby Landmark' className='border-[1px] mx-[50px] rounded-xl border-blue-400 focus:outline-none focus:border-blue-800 h-10 px-1 w-[40%] border-black' />
            </div>
          </div> : <div>
            
          </div>
}

          <button className='bg-blue-600 h-10 mt-10 w-[70%] rounded-xl mx-auto block px-3 text-white' type='submit'>Add Your Details</button>
        </div>

      </div>
    </form>
    
    </>
  )
}
