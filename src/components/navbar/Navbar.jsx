import React, { useEffect, useState } from 'react';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import Button from '../button/Button';
import { useCrossContext } from '../../contexts/Context';
import HoverComp from './HoverComp';
import BrushRoundedIcon from '@mui/icons-material/BrushRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function Navbar() {
   const [query, setQuery] = useState('');
   const [isHovered, setIsHovered] = useState(false);
   const [dotAnimation, setDotAnimation] = useState(false)
   const { click, setClick,prodCount } = useCrossContext();
   
   const navigate = useNavigate();

   useEffect(
      () => {
         if (click) {
            setQuery('');
         }
         setClick(false);
      }, [click]
   )

   const cartIconClicked = ()=>{
       return navigate('/cart');
   }
  
   return (
      
      <div className='flex bg-white border fixed z-10 w-screen h-16 items-center justify-between text-xl'>
         <div className='flex w-9/12 h-full items-center justify-evenly'>
            <Link to='' >Shop<span className='text-red-400 right-9 text-3xl'>&</span>Have</Link>
            <div className='w-1/2 h-2/3 relative'>
               <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className='w-full rounded-xl p-2 focus:outline-none text-lg text-gray-500 bg-gray-200' placeholder='Search for the happiness....' />
               <Button className='absolute right-2 top-0 w-8 h-full border-s-2 bg-gray-200 border-e-0 border-white' icon={<SearchIcon />} />
               <Button onClick={() => setClick(prev => !prev)} className='absolute right-10 bg-gray-200 top-1' icon={query.length > 0 ? <CloseIcon /> : ''} />
            </div>
            <div onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)} className='relative hover:bg-blue-500 hover:text-white rounded'>
               <button className='flex items-center p-1 gap-1 rounded'> <AccountCircleOutlinedIcon/> Login <div className={`${isHovered ? 'transition-transform duration-500 rotate-180' : 'transition-transform duration-500 rotate-0'}`}><KeyboardArrowDownOutlinedIcon /> </div> </button>
               {
                  isHovered ? <span className='absolute top-11 left-0'>
                     <HoverComp show={true} elements={[{ element: <AccountCircleOutlinedIcon />, title: 'Profile' }, { element: <BrushRoundedIcon />, title: 'Orders' }, { element: <FavoriteBorderRoundedIcon />, title: 'Wishlist' } , {title: 'Log out'}]} />
                  </span> : ''
               }
            </div>
            <div className='relative' onClick={cartIconClicked}>
               <span className='absolute top-2 right-4 font-bold rounded-full text-green-600'>{prodCount}</span>
               <Button className='min-w-16 h-16' icon={<ShoppingCartOutlinedIcon />} />
            </div>
         </div>
         <div onMouseOver={() => setDotAnimation(true)} onMouseOut={() => setDotAnimation(false)} className='w-1/12 relative cursor-pointer h-9'>
            <MoreVertOutlinedIcon className='border min-w-8 rounded min-h-8' />
            {
               dotAnimation ? <span className='absolute top-10' style={{ right: '-20px' }}>
                  <HoverComp show={false} elements={[{ element: <NotificationsNoneIcon />, title: 'Notification Preference' }, { element: <SupportAgentIcon />, title: 'Customer Care' }, { element: <InfoIcon />, title: 'About us' }]} />
               </span> : ''

            }
         </div>
      </div>
      
   )
}
