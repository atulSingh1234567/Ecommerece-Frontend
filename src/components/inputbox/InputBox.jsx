import React,{useState} from 'react'

export default function InputBox({type,inputFor,placeholder, minPrice , maxPrice ,step, inputVal}) {
    
  return (
    <div className='flex w-1/3 justify-between'>
      <label htmlFor={inputFor}>{inputFor}</label>
      <input type={type} min={minPrice} max={maxPrice} placeholder={placeholder} name={inputFor} step={step}  />
    </div>
  )
}
