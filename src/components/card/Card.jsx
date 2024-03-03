import React, { useEffect } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { useCrossContext } from '../../contexts/Context';
import toast,{Toaster} from 'react-hot-toast';
export default function Card({ imgSrc,info,name,prodId,goto}) {
      const {user,myProdCount} = useCrossContext();
      const navigate = useNavigate();
      function mycart(id){
        if(user.length >= 0 || user.length != undefined){
          // console.log("inside post function")
        axios.post('http://localhost:8000/api/v1/cart' ,{
          productId:id , userId: localStorage.getItem('userId')
        })
        .then(
          (res)=>{
            // console.log(res.data)
            toast.success("item is added to cart");
            // console.log(typeof localStorage.getItem('productN'))
            myProdCount((Number)(localStorage.getItem('productN'))+1)
          }
        )
        .catch(
          (err)=>{
            console.log("error while adding in cart" , err.message)
          }
        ) 
        } else {
            navigate('/login')
        }
    }
    

    return (
      <div className='min-w-52 cursor-pointer rounded flex flex-col items-center justify-evenly h-64 border'>
                    <Toaster toastOptions={{duration: 4000,
                                     style: {
                                        position: 'relative',
                                        top: 40
                                     }
                                     }} />
      <div className='w-full position-relative px-2'>
         <i onClick={()=>mycart(prodId)}> <BookmarkBorderIcon className='text-green-400'/></i> 
      </div>
      <Link to={`${goto}`}>
      <div className='w-40'>
        <img src={imgSrc} alt={name} />
      </div>
      <div className='flex flex-col items-center'>
        <h1>{name}</h1>
        <p className='font-bold text-green-400 w-full text-center'>{info}</p>
      </div>
    </Link>
    </div>
  )
}
