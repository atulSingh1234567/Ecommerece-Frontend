import React from 'react'

export default function Card({imgSrc,info,name}) {
  return (
    <div className='min-w-52 rounded flex flex-col items-center justify-evenly h-64 border'>
      <div className='w-40'>
        <img src={imgSrc} alt={name} />
      </div>
      <div className='flex flex-col items-center'>
        <h1>{name}</h1>
        <p className='font-bold text-green-400 w-full text-center'>{info}</p>
      </div>
    </div>
  )
}
