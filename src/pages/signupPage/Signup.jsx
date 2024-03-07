import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import OTPInput from 'otp-input-react';
import { auth } from './firebase.config'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import CircularProgress from '@mui/material/CircularProgress';
import toast, {Toaster} from 'react-hot-toast'
import { useCrossContext } from '../../contexts/Context';

export default function Signup({ task, info, useAs, userType, phoneAfter, goto }) {
    const [isFocused, setIsFocused] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [otp, setotp] = useState('');
    const [showOtpBox, setShowOtpBox] = useState(false)
    const [errMsg, setErrMsg] = useState('');
    const [loading, setloading] = useState(false)
    const [confirmOBJ,setConfirmOBJ] = useState({})
    const {isLoggedIn , setIsLoggedIn} = useCrossContext()
    const history = useNavigate()
    const inputStyle = {
        width: '40px',
        height: '40px',
        margin: '8px',
        fontSize: '18px',
        borderRadius: '4px',
        border: '1px solid #aac231',
        textAlign: 'center',
        outline: 'none', // Remove default input focus outline
    };

   function phoneAuthenticate(phoneNumber){
    const recaptchVerify = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response)=>{},
        'expired-callback': () => {}
    });
    recaptchVerify.render()
    const ph = '+91'+ phoneNumber;
    return signInWithPhoneNumber(auth, ph, recaptchVerify);
   }

   async function signupButton(){
    setErrMsg("");
    setloading(true)
    if(phoneNumber === '' || phoneNumber === undefined ){
        return setErrMsg('Please Enter a Valid Phone Number')
    }
    try{
        const response = await phoneAuthenticate(phoneNumber);
        setloading(false)
        setConfirmOBJ(response)
        toast.success('OTP has been sent to your phone number')
        setShowOtpBox(true);
      }
      catch(err){
        setErrMsg(err.message);
        setloading(false);
        setShowOtpBox(false);
      }
   }

   async function verifyOTP(){
    setErrMsg('');
    setloading(true)
    try{
       await confirmOBJ.confirm(otp)
       setloading(false)
       toast.success("OTP verified!!!")
    //    signedInUser(phoneNumber);
       setIsLoggedIn(true)
       localStorage.setItem('signupPhoneNumber' , phoneNumber)
       localStorage.setItem('isLoggedIn' , true)
       history('/profile')
    }catch(err){
        setIsLoggedIn(false)
       setErrMsg(err.message)
       setloading(false)
    }
   }

    return (
        <div className='flex h-[550px] justify-center relative top-20'>
            <Toaster toastOptions={{duration: 4000,
                                     style: {
                                        position: 'relative',
                                        top: 40
                                     }
                                     }} />
            <div className='bg-blue-500 px-3 py-12 w-3/12 justify-between flex flex-col'>
                <span className='flex flex-col gap-2'>
                    <h1 className='text-2xl tracking-wide text-white'>{task}</h1>
                    <p className='text-sm text-white'>{info}</p>
                </span>
                <span className='flex flex-col relative justify-center items-center'>
                    <div className='flex flex-col text-gray-700 items-center justify-center bg-gray-200 w-3/6 h-28 border-8 rounded border-black'>
                        <AccountCircleIcon className='min-w-16 min-h-16' />
                    </div>
                    <div className='w-[58%] h-2 bg-white rounded-b-xl'></div>
                    <div className='w-[80%] h-2 bg-blue-800 '></div>
                    <div>

                    </div>
                </span>
            </div>
            <motion.div whileTap={() => { phoneNumber.length > 0 ? setIsFocused(true) : setIsFocused(false) }} className='bg-white py-10 relative w-1/2 gap-16 items-center flex flex-col'>
                <motion.div whileTap={() => setIsFocused(true)} className='bg-white relative w-3/4 justify-center items-center flex flex-col' >
                    <motion.label className={`tracking-wide  w-full absolute text-lg ${isFocused ? 'transition-translate translate-y-[-25px] duration-500' : 'transition-translate translate-y-0 duration-500'}`} htmlFor="mobile">Enter Your Mobile Number</motion.label>
                    <motion.input whileFocus={() => setIsFocused(true)} className='focus:outline-none w-full border-b-2 text-gray-400 border-blue-500' type="tel" id='mobile' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </motion.div>
                    {
                        errMsg.length>0 ? <i className='text-red-800'>{errMsg}</i> : ''
                    }

                {
                    showOtpBox ? <OTPInput
                        value={otp}
                        onChange={setotp}
                        OTPLength={6}
                        otpType="number"
                        disabled={false}
                        autoFocus
                        inputStyles={inputStyle} /> : ''
                }

                <div id='recaptcha-container'></div>


                <div className='w-3/4 flex flex-col gap-2 items-center'>
                    <p className='text-sm text-gray-400 tracking-wide'>Happy Shopping Folks!</p>
                    <button onClick={showOtpBox?verifyOTP:signupButton} className='w-full bg-orange-500 text-white text-xl h-12 rounded-xl'>
                        
                        {showOtpBox ? (loading? <CircularProgress style={{width:'20px', height: '20px', color:'yellow' }}/> :'Verify OTP')  : (loading? <CircularProgress style={{width:'20px', height: '20px', color:'yellow' }}/> : phoneAfter)}
                        
                    </button>
                    
                    <Link className='w-full' to={`/${goto}`}>
                        <div className='cursor-pointer text-blue-500 tracking-wide gap-1 shadow-xl border w-full h-12 flex items-center rounded-xl justify-center'>
                            <span>{userType} User?</span>
                            <span>{useAs}</span>
                        </div>
                    </Link>
                </div>
              
            </motion.div>
   
        {/* <CircularProgress style={{width:'20px', height: '20px', color: 'yellow'}} /> */}

        </div>
    )
}
