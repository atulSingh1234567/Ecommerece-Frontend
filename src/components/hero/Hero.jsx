import React,{useEffect, useState} from 'react';
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {motion} from 'framer-motion';
import '../hero/Hero.scss'

export default function Hero({imgLink,name}) {
    
    const [currentIndex , setCurrentIndex] = useState(0);
    
    const nextSlide = ()=>{
        setCurrentIndex(prev => (prev+1)%imgLink.length);
    }

    const prevSlide = ()=>{
        setCurrentIndex(prev => (prev-1+imgLink.length)%imgLink.length)
    }

    useEffect(
        ()=>{
            const intervalId = setInterval(nextSlide , 3000)
            return () => {
                clearInterval(intervalId);
              };
        }, [currentIndex]
    )

    const variants = {
        initial: {
            x: '0%'
        },

        animate: {
            x: '-20%',
            transition: {
                repeatType: 'mirror',
                repeat: Infinity,
                duration: 0.5
            }
        }
    }



  return (
    <div className='w-screen bg-gray-300 relative items-center overflow-hidden flex' style={{height: '200px'}}>
      <motion.div onClick={nextSlide} variants={variants} initial='initial' animate='animate' className='absolute cursor-pointer h-full right-4'>
        <EastIcon className='relative top-1/2' />
      </motion.div>
       <div className=' w-full flex items-center justify-center'>
        <img className='w-11/12' src={imgLink[currentIndex]} alt={name} />
       </div>
      <motion.div onClick={prevSlide} variants={variants} initial='initial' animate='animate' className='absolute h-full left-4 cursor-pointer'>
        <KeyboardBackspaceIcon className='relative top-1/2' />
      </motion.div>
    </div>
  )
}
