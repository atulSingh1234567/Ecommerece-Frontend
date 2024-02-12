import React from 'react'

export default function Cart({order}) {
  const products = [{
    productName: 'Soft teddy',
    productPrice: 345,
    productImg: 'https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/m/f/e/cute-pink-rabbit-stuffed-animal-soft-toy-for-kids-playing-long-original-imagwezvzs5efa4g.jpeg?q=70'
    , productRating: 4.5,
    discount: 10
  }, {
    productName: 'Soft teddy',
    productPrice: 345,
    productImg: 'https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/m/f/e/cute-pink-rabbit-stuffed-animal-soft-toy-for-kids-playing-long-original-imagwezvzs5efa4g.jpeg?q=70'
    , productRating: 4.5,
    discount: 10
  }, {
    productName: 'Soft teddy',
    productPrice: 345,
    productImg: 'https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/m/f/e/cute-pink-rabbit-stuffed-animal-soft-toy-for-kids-playing-long-original-imagwezvzs5efa4g.jpeg?q=70'
    , productRating: 4.5,
    discount: 10
  }]

  const Subtotal = products.reduce(function(x , y){
    return x+y.productPrice;
  } , 0)
  
  const discount = products.reduce(function(x, y){
    return x+((y.productPrice * y.discount) / 100);
  },0)
  
 
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 pt-20">    
        <div className="gap-8 h-fit bg-gray-100 rounded-md p-3">
       {
        products.map(function (product, index) {
          
        return ( <div key={index} className="flex gap-10 bg-gray-100 border border-white rounded-md p-3">
              <div className="border border-slate-200 p-2 w-32 rounded-xl">
                <img src={product.productImg} alt={product.productName} className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <h2 className="font-bold text-xl text-black">{product.productName}</h2>
                <div className="grid grid-cols-2">
                  <div>
                    <p className="font-light">Instant {product.discount}% off</p>
                    <p className="font-bold text-xl">${product.productPrice}</p>
                  </div>

                </div>
                <p className="bg-green-400 inline-block px-1 py-0.5 rounded">{product.productRating}★</p>
              </div>
            </div>
        )

})
}
</div> 

{  !order &&     <div className="bg-white rounded px-10 py-8">
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
            <p className="text-2xl font-semibold text-gray-900">${8 + Subtotal - discount}</p>
          </div>
          <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
        </div>
}
      </div>
    </>
  );
};
