import { useParams } from "react-router-dom";

const Checkout = () => {
  const { productName } = useParams();
  console.log(productName);
  const product_Name = "Nike Air Max Pro 8888 - Super Light";
  const productPrice = 100;
  const discount = 10;
  const productDescription = "Soft toy";
  const productBrand = "H&M";
  const productRating = 4;
  const productReviews = 100;
  const productColor = "Pink";
  const productSize = "S";
  const productQuantity = 1;

  const productImg =
    "https://m.media-amazon.com/images/I/61g89rqJqhL.__AC_SX300_SY300_QL70_FMwebp_.jpg";
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 py-6 pt-28">
        <div className="gap-8 bg-gray-100 rounded-md p-3">
          <div className="flex gap-10 bg-gray-100 rounded-md p-3">
            <div className="border border-slate-200 p-2 w-32 rounded-xl">
              <img src={productImg} alt={product_Name} className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <h2 className="font-bold text-xl text-black">{product_Name}</h2>
              <div className="grid grid-cols-2">
              <div>
              <p className="font-light">Instant {discount}% off</p>
              <p className="font-bold text-xl">${productPrice}</p>
              </div>
              <div className="">
                <button className="border border-slate-300 px-2 rounded-md hover:bg-slate-200">+</button>
                <span className="mx-2 border-b border-slate-400">1</span>
                <button className="border border-slate-300 px-2 rounded-md hover:bg-slate-200">-</button>
              </div>
              </div>
              <p className="bg-green-400 inline-block px-1 py-0.5 rounded">{productRating}★</p>
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
              <p class="font-semibold text-gray-900">$399.00</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Shipping Charges:</p>
              <p class="font-semibold text-gray-900">$8.00</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Discounted Price:</p>
              <p class="font-semibold text-gray-900">- $120</p>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-between">
            <p class="text-md font-medium text-gray-900">Total Payable Amount:</p>
            <p class="text-2xl font-semibold text-gray-900">$408.00</p>
          </div>
        <button class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
        </div>
      </div>
    {/* </div > */}
    </>
  );
};

export default Checkout;
