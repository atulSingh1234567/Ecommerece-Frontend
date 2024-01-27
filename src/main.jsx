import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Homepage from './pages/homepage/Homepage'

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {
      path: "",
      element: <Homepage />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)
