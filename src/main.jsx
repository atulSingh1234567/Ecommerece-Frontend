import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Homepage from './pages/homepage/Homepage'
import Product from './pages/product/Product.jsx'

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
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)
