import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import InputAddress from '../../components/addressSection/InputAddress';

export default function Profile() {
  const [genderSelected, setGenderSelected] = useState(null)
  const genderSelector = (option) => {
    setGenderSelected(option === genderSelected ? null : option)
  }

  const addAddress = function () {

  }




  return (
    <div className='flex relative justify-center gap-4 top-20 w-screen'>

      <div className='w-8/12 p-10 bg-white'>
        <div id='myDetails' className='flex flex-col w-full gap-5 px-8 py-6'>
          <h1 className='tracking-wide text-xl'>My Details</h1>
          <div className='flex flex-col gap-4 justify-center'>
            <div className='flex justify-evenly'>
              <input type="text" placeholder='First Name' className='border-[1px] rounded-xl h-10 px-1 w-5/12 border-blue-400 focus:outline-none focus:border-blue-800' />
              <input type="text" placeholder='Last Name' className='border-[1px] rounded-xl px-1 w-5/12 border-blue-400 focus:outline-none focus:border-blue-800' />
            </div>
            <div className='flex justify-center p-4 w-full'>
              <input type="text" placeholder='Type Your Email' className='border-[1px] rounded-xl border-blue-400 focus:outline-none focus:border-blue-800 h-10 px-1 w-[92.5%] border-black' />
            </div>
            <div className='flex px-12'>
              <input type="tel" placeholder='Alternate Phone Number' className='border-[1px] h-10 border-blue-400 rounded-xl px-1 w-5/12 border-black focus:outline-none focus:border-blue-800' />
            </div>
            <div className='flex my-4 px-12 gap-4'>
              <span onClick={() => genderSelector('male')} className={`w-20 flex flex-col text-blue-400 hover:bg-blue-100 cursor-pointer items-center justify-center border-blue-400 rounded-xl h-20 border ${genderSelected === 'male' ? 'bg-blue-100 text-blue-500' : ''}`}>
                <MaleIcon />
                <p>Male</p>
              </span>
              <span onClick={() => genderSelector('female')} className={`w-20 flex flex-col text-blue-400 hover:bg-pink-100 cursor-pointer items-center justify-center border-blue-400 rounded-xl h-20 border ${genderSelected === 'female' ? 'bg-pink-100 text-pink-500' : ''}`}>
                <FemaleIcon />
                <p>Female</p>
              </span>
            </div>
          </div>
        </div>
        <div id='address' className='flex flex-col justify-center'>
          <h1 className='px-8 text-xl pb-6'>My Address</h1>
          <div className='flex justify-center gap-4 items-center'>
            <input type="text" placeholder='Your Address' className='border-[1px] rounded-xl h-10 px-1 w-7/12 border-blue-400 focus:outline-none focus:border-blue-800' />
            <input type="text" placeholder='Pin Code' className='border-[1px] rounded-xl h-10 px-1 w-3/12 border-blue-400 focus:outline-none focus:border-blue-800' />
          </div>
          <div className='flex p-4 w-full'>
              <input type="text" placeholder='Nearby Landmark' className='border-[1px] mx-[50px] rounded-xl border-blue-400 focus:outline-none focus:border-blue-800 h-10 px-1 w-[40%] border-black' />
          </div>
        </div>

          <button className='bg-blue-600 h-10 mt-10 w-[70%] rounded-xl mx-auto block px-3 text-white' onClick={addAddress}>Add Your Details</button>
      </div>

    </div>
  )
}
