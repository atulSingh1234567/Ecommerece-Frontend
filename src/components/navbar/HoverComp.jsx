import React from 'react'
import { Link } from 'react-router-dom'

export default function HoverComp(props) {

  return (
    <div className={`flex border right-6 relative bottom-2 z-50 gap-1 text-black flex-col bg-white rounded shadow-xl w-64`}>
      <div className='border-b border-gray-300 flex justify-between p-3'>
        <span className='text-lg'>{props.customer.length > 0 ? props.customer : ''}</span>
        {
          props.customer === 'New Customer?'? <Link className='text-blue-700 text-lg font-bold' to="/signup">Sign up</Link> : ''
        }
      </div>
      <div className='flex flex-col gap-2 p-3'>
        {
          props.elements.map(function (items, index) {
            return (
              <span key={index} className='flex text-lg gap-2'>
                {items.element}
                <Link to="#">{items.title}</Link>
              </span>
            )
          })
        }
      </div>
    </div>
  )
}