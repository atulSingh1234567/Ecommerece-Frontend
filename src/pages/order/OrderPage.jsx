import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function OrderPage() {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    useEffect(
        () => {
            axios.post('http://localhost:8000/api/v1/ordered-products', { userId: localStorage.getItem('userId') })
                .then(
                    (res) => {
                        setProducts(res.data);
                    }
                )
                .catch(
                    (err) => {
                        console.log(err)
                    }
                )
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
                products && <div className='relative h-screen top-20 flex py-4 px-6 flex-col gap-4 w-screen'>
                    <h1 className='text-xl font-bold'>Your Orders</h1>
                    <div>
                        {
                            products.map(function(item , index){
                                return (
                                    <div key={index} className='flex border border-black gap-4 h-44 w-8/12'>
                                        <img src={item.img} alt={item.productname} />
                                        <div>
                                        <h1 className='text-xl font-semibold'>{item.productname}</h1>
                                        <p className='text-gray-600'>{item.aboutProd}</p>
                                        <p>${item.price}</p>
                                        <button onClick={()=>buyAgain(item)} className='border border-blue-400 rounded p-4'>Buy Again</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            }
        </>
    )
}
