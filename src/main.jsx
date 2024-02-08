import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Homepage from './pages/homepage/Homepage'
import Product from './pages/product/Product.jsx'
import Signup from './pages/signupPage/Signup.jsx'
import Profile from './pages/profilePage/Profile.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {
      path: `${''}`,
      element: <Homepage />,
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
      path: 'products/:productName',
      element: <Product />
    },
    {
      path: 'login',
      element: <Signup
      userType='New'
      useAs='Create an account'
      phoneAfter='Request for OTP'
      task={`Log in`}
      info='Get access to your account'
      goto='signup'
      />
    },
    {
      path: 'profile',
      element: <Profile />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)
