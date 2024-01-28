import React, { useEffect } from 'react'
import { useCrossContext } from '../../contexts/Context';

export default function Cross({className , icon , onClick}) {
  const {click , setClick} = useCrossContext()
  useEffect(
    ()=>{
      setClick(prev => !prev);
    } , [click]
  )
  return (
    <button className={className} onClick={onClick}>
      {icon}
    </button>
  )
}
