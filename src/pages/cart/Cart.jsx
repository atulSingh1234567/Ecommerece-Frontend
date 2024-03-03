import React,{useState,useEffect} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import toast,{Toaster} from 'react-hot-toast';
import { useCrossContext } from '../../contexts/Context';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const [products,setProducts] = useState([]);
  const {myProdCount,prodCount, user} = useCrossContext();
  const navigate = useNavigate();
  const Subtotal = products.reduce(function(x , y){
    return x+y.price;
  } , 0)
  
  const discount = products.reduce(function(x, y){
    return x+((y.price * y.discount) / 100);
  },0)

  const deleteItemFromCart = (id)=>{
        axios.post('http://localhost:8000/api/v1/delete-product' , {productId: id})
        .then(
          (res)=>{
            // console.log(res)
            toast.success("Item is removed from the cart")
          }
        )
        .catch(
          (err)=>{
            console.log(err)
          }
        )
  }
  
 useEffect(
  ()=>{
    // console.log(localStorage.getItem('userId'))
    if(user.length >= 0 || user.length != undefined){
    axios.post('http://localhost:8000/api/v1/getcartitem' , {userId: localStorage.getItem('userId')})
    .then(
      (res)=>{
          // console.log(res)
          setProducts(res.data)
          myProdCount(products.length);
          localStorage.setItem('productN' ,  prodCount)
      }
    )
    .catch(
      (err)=>{
         console.log(err)
      }
    )
    }
  },[products]
 )

 const gotocheckout = (prodname)=>{
    navigate(`/cart/checkout/${prodname}`)
 }
//  console.log(products)
  return (
    <>
   { products.length > 0 ?  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 pt-20">  
   <Toaster toastOptions={{duration: 4000,
                                     style: {
                                        position: 'relative',
                                        top: 40
                                     }
                                     }} />  
       <div className="gap-8 h-fit bg-gray-100 rounded-md p-3">
       {
        products.map(function (product, index) {
          
        return ( <div key={index} className="flex relative gap-10 bg-gray-100 border border-white rounded-md p-3">
             <i onClick={()=>deleteItemFromCart(product._id)} className='absolute right-4 cursor-pointer'><DeleteIcon/></i>
              <div className="border border-slate-200 p-2 w-32 rounded-xl">
                <img src={product.img} alt={product.productname} className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <h2 className="font-bold text-xl text-black">{product.productname}</h2>
                <div className="grid grid-cols-2">
                  <div>
                    <span className='text-sm'>{product.brand}</span>
                    {/* <p className="font-light">Instant {product.discount}% off</p> */}
                    <p className="font-bold text-xl text-green-500">${product.price}</p>
                    <p className='text-sm text-gray-500 font-thin w-full'>{product.aboutProd}</p>
                  </div>

                </div>
                {/* <p className="bg-green-400 inline-block px-1 py-0.5 rounded">{product.ratings}★</p> */}
                <button onClick={()=>gotocheckout(product.productname)} className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Order</button>
              </div>
            </div>
        )

})
}
</div> 

 { <div className="bg-white rounded px-10 py-8">
          <h1 className="text-xl font-bold">Payment Details</h1>
          <p className="font-light">Complete your order by providing your payment details.</p>

          <div className="mt-6 border-t border-b py-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Subtotal:</p>
              <div className='flex gap-2'>
                 <h1 className='font-normal'>${Subtotal}({products.length})</h1>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Shipping Charges:</p>
              <p className="font-semibold text-gray-900">$8.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Discounted Price:</p>
              <h1>-${discount}</h1>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-md font-medium text-gray-900">Total Payable Amount:</p>
            <p className="text-2xl font-semibold text-gray-900">${8 + Subtotal - (discount?discount:0)}</p>
          </div>
          
    </div> 
} 
  </div> : <div className='h-screen flex items-center justify-center'> <h1 className='text-4xl tracking-wide text-gray-500'>Please add products to the cart</h1>  </div>
}
    </>
  );
};
