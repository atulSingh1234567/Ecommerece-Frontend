import React from 'react'
import InputBox from '../../components/inputbox/InputBox'
import { useParams } from 'react-router-dom'
import Card from '../../components/card/Card'

export default function Product() {
  const brands = [`Levi's`, `Adidas`, `Puma`, `H&M`, `Other`]
  const {productName} = useParams()
  const cardImg = ['https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/m/f/e/cute-pink-rabbit-stuffed-animal-soft-toy-for-kids-playing-long-original-imagwezvzs5efa4g.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/m/f/e/cute-pink-rabbit-stuffed-animal-soft-toy-for-kids-playing-long-original-imagwezvzs5efa4g.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/m/f/e/cute-pink-rabbit-stuffed-animal-soft-toy-for-kids-playing-long-original-imagwezvzs5efa4g.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/m/f/e/cute-pink-rabbit-stuffed-animal-soft-toy-for-kids-playing-long-original-imagwezvzs5efa4g.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/m/f/e/cute-pink-rabbit-stuffed-animal-soft-toy-for-kids-playing-long-original-imagwezvzs5efa4g.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/m/f/e/cute-pink-rabbit-stuffed-animal-soft-toy-for-kids-playing-long-original-imagwezvzs5efa4g.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/m/f/e/cute-pink-rabbit-stuffed-animal-soft-toy-for-kids-playing-long-original-imagwezvzs5efa4g.jpeg?q=70',
  'https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/m/f/e/cute-pink-rabbit-stuffed-animal-soft-toy-for-kids-playing-long-original-imagwezvzs5efa4g.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/m/f/e/cute-pink-rabbit-stuffed-animal-soft-toy-for-kids-playing-long-original-imagwezvzs5efa4g.jpeg?q=70']

  return (
    <div className='flex relative justify-evenly w-screen top-20'>
      <div className='flex h-fit flex-col gap-4 w-1/6 bg-white p-3'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-xl'>Brand</h1>
          <ul className='flex flex-col gap-1'>
           {
            brands.map(function(item , index){
              return <li key={index}> <InputBox inputFor={item} type='checkbox' /> </li>
            })
           }
          </ul>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-xl'>Price</h1>
          <InputBox type='range' minPrice={100} maxPrice={5000} step={100} />
        </div>
      </div>
      <div className='w-4/5 p-2 bg-white'>
          <h1 className='text-xl pb-4'>{productName}</h1>
          <div className='flex flex-wrap gap-2'>
          {
            cardImg.map(function(item, index){
              return <Card key={index} imgSrc={item}  />
            })
          }
          </div>
      </div>
    </div>
  )
}
