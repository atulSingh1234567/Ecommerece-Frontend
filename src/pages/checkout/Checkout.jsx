import { useState } from "react";
import { useCrossContext } from "../../contexts/Context";
import axios from "axios";
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

const Checkout = () => {
  const [checkoutMsg, setCheckoutMsg] = useState('')
  const {isLoggedIn} = useCrossContext() 
  // console.log(forPaymentProd)
  const navigate = useNavigate()
  // console.log(PaymentProd)
  
  const PaymentProd = JSON.parse(localStorage.getItem('ordered'));
  const userId = localStorage.getItem('userId')
  const Subtotal = function(){
    return PaymentProd.price;
  }
  
  const discount = function(){
    return (Math.floor(PaymentProd.price * PaymentProd.discount) / 100);
  }

  // console.log(localStorage.getItem('isLoggedIn'))

  const orderPlaced = async ()=>{
    try {
      
      if(isLoggedIn || localStorage.getItem('isLoggedIn')){
      axios.post('https://ecommerece-backend.vercel.app/api/v1/order' , {userId:userId , productId:PaymentProd._id})
      .then(
        (res)=>{
          setCheckoutMsg(res.data);
        }
      )
      .catch(
        (err)=>{
          setCheckoutMsg(err.message)
        }
      );

      }else{
        navigate('/profile')
      }

      
    } catch (error) {
       setCheckoutMsg(error.message)
       console.log(error)
    }
  }


  const endBox = ()=>{
    setCheckoutMsg('');
    navigate('/orders')
  }
  // console.log(checkoutMsg)
  return (
    <>
      <div className="grid relative h-screen grid-cols-6 w-full md:grid-cols-2 gap-4 px-10 py-6 pt-28">
        <div className="gap-8 bg-gray-100 rounded-md p-3">
          <div className="flex gap-10 bg-gray-100 rounded-md p-3">
            <div className="border border-slate-200 p-2 w-32 rounded-xl">
              <img src={PaymentProd.img} alt={PaymentProd.productname} className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <h2 className="font-bold text-xl text-black">{PaymentProd.productname}</h2>
              <div className="grid grid-cols-2">
              <div>
              <p className="font-light">Instant {`${Math.floor(PaymentProd.discount)}`}% off</p>
              <p className="font-bold text-xl">${PaymentProd.price}</p>
              </div>
              <div className="">
                <button className="border border-slate-300 px-2 rounded-md hover:bg-slate-200">+</button>
                <span className="mx-2 border-b border-slate-400">1</span>
                <button className="border border-slate-300 px-2 rounded-md hover:bg-slate-200">-</button>
              </div>
              </div>
              <p className="bg-green-400 inline-block px-1 py-0.5 rounded">{PaymentProd.rating}★</p>
            </div>
          </div>
          <div className="flex items-center gap-6 mt-4 border border-slate-300 rounded-md p-4 justify-between">
            <div className="flex items-center gap-6">
              <img src="https://componentland.com/images/naorrAeygcJzX0SyNI4Y0.png" className="w-14 h-5" />
              <div className="">
                <h2 className="font-bold">Kanpur Nagar Block XYZ</h2>
                <p className="font-light">Delivery within 2-4 days</p>
              </div>
            </div>
            <input type="radio" checked="true" className="mr-10 w-6 h-6" />
          </div>
          <button className="border border-slate-300 px-2.5 py-1.5 rounded mt-4">Add New Address</button>
        </div>
        <div className="bg-white rounded px-10 py-8">
          <h1 className="text-xl font-bold">Payment Details</h1>
          <p className="font-light">Complete your order by providing your payment details.</p>

          <div class="mt-6 border-t border-b py-2">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Subtotal:</p>
              <p class="font-semibold text-gray-900">{Subtotal()}</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Shipping Charges:</p>
              <p class="font-semibold text-gray-900">$8.00</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Discounted Price:</p>
              <p class="font-semibold text-gray-900">- ${discount()}</p>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-between">
            <p class="text-md font-medium text-gray-900">Total Payable Amount:</p>
            <p class="text-2xl font-semibold text-gray-900">${8 + Subtotal() -(discount()?discount():0)}</p>
          </div>
        <button class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white" onClick={orderPlaced}>{checkoutMsg==='placing'? <CircularProgress/>: <span>Place Order</span> }</button>
        </div>

       { checkoutMsg.length > 0 ? <div className={`bg-blue-700 rounded flex items-center cursor-pointer justify-center top-1/3 left-1/3 absolute h-44 w-4/12`}> 
            <i onClick={endBox} className="bg-white rounded-full absolute border shadow-lg right-[-10px] top-[-10px]"><ClearIcon/></i>
            <h1 className="text-2xl font-semibold text-white">{checkoutMsg}</h1>
        </div> : ''
}
      </div>
      
    {/* </div > */}
    </>
  );
};

export default Checkout;
