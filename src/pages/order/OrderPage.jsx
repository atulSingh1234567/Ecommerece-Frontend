import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCrossContext } from '../../contexts/Context'
import CircularProgress from '@mui/material/CircularProgress';

export default function OrderPage() {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const {isLoggedIn} = useCrossContext()
    useEffect(

        () => {
            if(isLoggedIn || localStorage.getItem('isLoggedIn')){
            axios.post('https://ecommerece-backend.vercel.app/api/v1/ordered-products', { userId: localStorage.getItem('userId') })
                .then(
                    (res) => {
                        setProducts(res.data);
                        localStorage.setItem('isLoggedIn' , true)
                    }
                )
                .catch(
                    (err) => {
                        console.log(err)
                    }
                )
            }
        }, []
    )

    // console.log(products)
    const buyAgain = (prod , prodname)=>{
        localStorage.setItem('ordered' , JSON.stringify(prod))
    // setForPaymentProd(product)
    navigate(`/orders/checkout/${prodname}`)
        
    }


    return (
        <>
            {
                products.length > 0 ? <div className='relative top-20 flex py-4 px-6 flex-col gap-4 w-screen'>
                    <h1 className='text-xl font-bold'>Your Orders</h1>
                    <div>
                        {
                          products.length > 0 ?  products.map(function(item , index){
                                return (
                                    <div key={index} className='flex gap-4 h-44 w-8/12'>
                                        <img src={item.img} alt={item.productname} />
                                        <div>
                                        <h1 className='text-xl font-semibold'>{item.productname}</h1>
                                        <p className='text-gray-600'>{item.aboutProd}</p>
                                        <p>${item.price}</p>
                                        <button onClick={()=>buyAgain(item)} className='border border-blue-400 rounded p-4'>Buy Again</button>
                                        </div>
                                    </div>
                                )
                            }) : <div className='h-screen flex items-center justify-center'> <h1 className='text-4xl tracking-wide text-gray-500'>Come on! Go, Get your things.</h1>  </div>
                        }
                    </div>

                </div> : <div className='flex items-center justify-center h-[100vh] w-screen'><CircularProgress/></div>
            }
        </>
    )
}
