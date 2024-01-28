import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { CiTwitter } from "react-icons/ci";
import { FaPinterestP,FaTelegramPlane } from "react-icons/fa";

export default function Footer() {

    const variants = {
        
            initial: {
                x: '-50%',
                opacity: 0.1
            },
            animate: {
                x: '50%',
                opacity: 0.1,
                transition: {
                    duration: 5,
                    repeatType: 'mirror',
                    repeat: Infinity
                }
            }
        
    }

  return (
    <motion.div className='flex overflow-hidden relative top-24 flex-col gap-16 justify-evenly h-96' style={{backgroundColor: '#762c42'}}>
        <motion.div className='absolute bg-gray-200 opacity-5 w-40 h-40 left-56 top-5 rounded-full'></motion.div>
        <motion.div className='absolute bg-gray-200 opacity-5 w-40 h-32 left-1 bottom-5 rounded-full'></motion.div>
        <motion.div className='absolute bg-gray-200 opacity-5 w-40 h-40 right-10 top-4 animate-spin rounded-full'></motion.div>
        <motion.div className='absolute bg-gray-200 opacity-5 w-40 h-40 right-1/2 rounded-xl' style={{top: '-80px', left: '-72px'}}></motion.div>
      <div className='flex  justify-evenly'>
         <div className='gap-1 flex flex-col'>
            <h2 className='font-bold text-white'>Quick Links</h2>
            <Link to='/' className='text-gray-400'>Home</Link>
            <Link to='/' className='text-gray-400'>Top Deals</Link>
            <Link to='/' className='text-gray-400'>Orders</Link>
            <Link to='/' className='text-gray-400'>Cart</Link>
         </div>
         <div className='flex gap-1 flex-col'>
            <h2 className='font-bold text-white'>Browse Products By</h2>
            <Link to='/' className='text-gray-400'>Recommendations</Link>
            <Link to='/' className='text-gray-400'>Gift items</Link>
            <Link to='/' className='text-gray-400'>New Arrivals</Link>
            <Link to='/' className='text-gray-400'>Best Sellers</Link>
         </div>
         <div className='flex flex-col gap-1'>
            <h2 className='font-bold text-white'>buyUnique</h2>
            <Link to='/' className='text-gray-400'>About us</Link>
            <Link to='/' className='text-gray-400'>Meet The Founders</Link>
            <Link to='/' className='text-gray-400'>Contact us</Link>
         </div>
         <div className='flex flex-col gap-2'>
            <h2 className='font-bold text-white'>Contact us</h2>
            <p className='text-gray-400'>91-1234567890</p>
            <p className='text-gray-400'>shopandhave@gmail.com</p>
         </div>
      </div>
      <motion.div variants={variants} initial='initial' animate='animate' className='w-4/5 border border-gray-200'></motion.div>
      <div className='relative flex justify-evenly'>
          <motion.div className='flex gap-2 items-center'>
            <motion.a whileHover={{scale: 1.2 , transition: {duration: 0.3}}} href='#'><FacebookOutlinedIcon className='text-gray-400 min-w-8 min-h-8 hover:text-white'/></motion.a>
            <motion.a whileHover={{scale: 1.2 , transition: {duration: 0.3}}} href='#'><CiTwitter className='text-gray-400 min-w-8 min-h-8 hover:text-white'/></motion.a>
            <motion.a whileHover={{scale: 1.2 , transition: {duration: 0.3}}} href='#'><FaPinterestP className='text-gray-400 min-w-8 min-h-8 hover:text-white'/></motion.a>
            <motion.a whileHover={{scale: 1.2 , transition: {duration: 0.3}}} href='#'><FaTelegramPlane className='text-gray-400 min-w-8 min-h-8 hover:text-white'/></motion.a>
          </motion.div>
          <div>
            <p className='text-gray-400'>Shop&Have 2024, All right reserved</p>
          </div>
      </div>
    </motion.div>
  )
}