import InputBox from '../../components/inputbox/InputBox'
import { useParams } from 'react-router-dom'
import Card from '../../components/card/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Product() {
  const brands = [`Levi's`, `Adidas`, `Puma`, `H&M`, `Other`]
  const {category} = useParams()
  const [cardImg , setCardImg] = useState([]);
  useEffect(
    ()=>{
      axios.get('http://localhost:8000/api/v1/products')
      .then(
        (response)=>{
            setCardImg(response.data);
            // console.log("data from /products route has been fetched: " , response.data);
        }
      )
      .catch(
        (error)=>{
          console.log("error in the /products route has error: " , error);
        }
      )
    }, []
  )

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
          <h1 className='text-xl pb-4'>{category}</h1>
          <div className='flex flex-wrap gap-2'>
          {
            cardImg.map(function(item, index){
              return <Card key={item._id} goto={`checkout/${item.product}`} imgSrc={item.img} name={item.productname} prodId={item._id}   /> 
            })
          }
          </div>
      </div>
    </div>
  )
}
