import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Signup({ task, info, useAs, userType, phoneAfter, goto }) {
    const [isFocused, setIsFocused] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('')
  

    const getUserNumber = ()=>{
        const userNumber = phoneNumber;
        alert(userNumber);
        setPhoneNumber('');
        if(phoneNumber.length <= 0){
            setIsFocused(false)
        }
    }




    return (
        <div className='flex h-[550px] justify-center relative top-20'>
            <div className='bg-blue-500 px-3 py-12 w-3/12 justify-between flex flex-col'>
                <span className='flex flex-col gap-2'>
                    <h1 className='text-2xl tracking-wide text-white'>{task}</h1>
                    <p className='text-lg text-white'>{info}</p>
                </span>
                <span className='flex flex-col relative justify-center items-center'>
                    <div className='flex flex-col text-gray-700 items-center justify-center bg-gray-200 w-3/6 h-28 border-8 rounded border-black'>
                        <AccountCircleIcon className='min-w-16 min-h-16'/>
                    </div>
                    <div className='w-[58%] h-2 bg-white rounded-b-xl'></div>
                    <div className='w-[80%] h-2 bg-blue-800 '></div>
                    <div>

                    </div>
                </span>
            </div>
            <motion.div whileTap={()=>{phoneNumber.length > 0? setIsFocused(true): setIsFocused(false)}} className='bg-white py-10 relative w-1/2 gap-16 items-center flex flex-col'>
                <motion.div whileTap={() => setIsFocused(true)} className='bg-white relative w-3/4 justify-center items-center flex flex-col' >
                    <motion.label  className={`tracking-wide  w-full absolute text-lg ${isFocused ? 'transition-translate translate-y-[-25px] duration-500' : 'transition-translate translate-y-0 duration-500'}`} htmlFor="mobile">Enter Your Mobile Number</motion.label>
                    <motion.input whileFocus={()=>setIsFocused(true)} className='focus:outline-none w-full border-b-2 text-gray-400 border-blue-500' type="tel" id='mobile' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
                </motion.div>

                <div className='w-3/4 flex flex-col gap-2 items-center'>
                    <p className='text-sm text-gray-400 tracking-wide'>Happy Shopping Folks!</p>
                  <button onClick={getUserNumber} className='w-full bg-orange-500 text-white text-xl h-12 rounded-xl'>{phoneAfter}</button>
                  <Link className='w-full' to={`/${goto}`}>
                  <div className='cursor-pointer text-blue-500 tracking-wide gap-1 shadow-xl border w-full h-12 flex items-center rounded-xl justify-center'>
                    <span>{userType} User?</span>
                    <span>{useAs}</span>
                  </div>
                  </Link>
                </div>

            </motion.div>


        </div>
    )
}
