import React, { useEffect, useState } from 'react';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import Button from '../button/Button';
import { useCrossContext } from '../../contexts/Context';

export default function Navbar() {
   const [query , setQuery] = useState('');
   const [isHovered , setIsHovered] = useState(false);
   const {click , setClick} = useCrossContext();


   useEffect(
      ()=>{
         if(click){
            setQuery('');
         }
         setClick(false);
      }, [click]
   )

   
   return (
      <div className='flex bg-white fixed z-10 w-screen h-16 items-center justify-between text-xl'>
         <div className='flex w-9/12 h-full items-center justify-evenly'>
            <Link to='' >Shop<span className='text-red-400 right-9 text-3xl'>&</span>Have</Link>
            <div className='w-1/2 h-2/3 relative'>
              <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} className='w-full rounded-xl p-2 focus:outline-none text-lg text-gray-500 bg-gray-200' placeholder='Search for the happiness....' />
              <Button className='absolute right-2 top-0 w-8 h-full border-s-2 bg-gray-200 border-e-0 border-white' icon={<SearchIcon/>} />
               <Button onClick={()=>setClick(prev => !prev)} className='absolute right-10 bg-gray-200 top-1' icon={query.length > 0 ? <CloseIcon /> : ''}/>
            </div>
            <button onMouseOver={()=>setIsHovered(true)} onMouseOut={()=>setIsHovered(false)} className='flex p-1 gap-1 hover:bg-blue-600 rounded hover:text-white'>Login <div className={`${isHovered? 'transition-transform duration-500 rotate-180' : 'transition-transform duration-500 rotate-0'}`}><KeyboardArrowDownOutlinedIcon/> </div> </button>
            <Button className='min-w-16 h-16' icon={<ShoppingCartOutlinedIcon/>}/>
         </div>
         <div className='w-1/12'>
            <MoreVertOutlinedIcon />
         </div>
      </div>
   )
}
