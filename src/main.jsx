import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Homepage from './pages/homepage/Homepage'
import Product from './pages/product/Product.jsx'
import Signup from './pages/signupPage/Signup.jsx'
import Checkout from "./pages/checkout/Checkout.jsx";


const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {
      path: "",
      element: <Homepage />
    },
    {
      path: 'products/:productName',
      element: <Product />
    },
    {
      path: 'signup',
      element: <Signup 
      userType='Existing'
      useAs='Log in'
      phoneAfter='Continue'
      task={`Looks like you're new here!`}
      info='Sign up with your phone number to get started'
      goto='login'
      />
    },
      {
        path: "products/:productName/checkout",
        element: <Checkout />,
      },
  ]
}])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>,
);
