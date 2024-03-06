import InputBox from '../../components/inputbox/InputBox'
import { useParams } from 'react-router-dom'
import Card from '../../components/card/Card'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Pagination } from '@mui/material';

export default function Product() {
  const brands = [`Levi's`, `Adidas`, `Puma`, `H&M`, `Other`]
  const { category } = useParams()
  // console.log(category)
  const [cardImg, setCardImg] = useState([]);
  const [countProd, setCountProd] = useState(0);

  const pages = Math.ceil(countProd / 50)
  useEffect(
    () => {
      if (category !== 'best deals') {
        axios.post('http://localhost:8000/api/v1/products?pageno=1', { category: category })
          .then(
            (response) => {
              setCardImg(response.data.products);
              setCountProd(response.data.noOfProd)
              // console.log("data from /products route has been fetched: " , response.data);
              // console.log(response.data)
            }
          )
          .catch(
            (error) => {
              console.log("error in the /products route has error: ", error);
            }
          )
      }
      else {
        axios.get('http://localhost:8000/api/v1/best-deals?pageno=1')
          .then(
            (res) => {
              setCardImg(res.data.actualProd)
              setCountProd(res.data.noOfProd)
              // console.log("best deals wala")
            }
          )
          .catch(
            (err) => {
              console.log(err)
            }
          )
      }
    }, []
  )

  const handleChange = (e)=>{
      console.log(e.target.innerText)
      if(category !== 'best deals'){
        axios.post(`http://localhost:8000/api/v1/products?pageno=${e.target.innerText}` , {category:category})
        .then(
          (res)=>{
            setCardImg(res.data.products);
            setCountProd(res.data.noOfProd)
          }
        )
        .catch(
          (err)=>{
            console.log(err)
          }
        )
      }else{
        const page = e.target.innerText;
        axios.get(`http://localhost:8000/api/v1/best-deals?pageno=${page}`)
        .then(
          (res)=>{
            setCardImg(res.data.actualProd);
            setCountProd(res.data.noOfProd);
          }
        )
        .catch(
          (err)=>{
            console.log(err)
          }
        )
      }
  }

  return (
    <div className='flex wrap relative justify-evenly w-screen top-20'>
      <div className='flex h-fit flex-col gap-4 w-1/6 bg-white p-3'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-xl'>Brand</h1>
          <ul className='flex flex-col gap-1'>
            {
              brands.map(function (item, index) {
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
            cardImg.map(function (item, index) {
              return <Card key={item._id} item={item}  goto={`checkout/${item.productname}`} imgSrc={item.img} name={item.productname} price={item.price} info={`upto ${Math.floor(item.discount)}% off`} rating={item.rating} prodId={item._id} />
            })
          }
        </div>
        {
         countProd>50 ? 
         <div>
          <Pagination count={pages} shape='rounded' variant='outlined' onChange={handleChange}/>
          </div> : ''
        }
      </div>
    </div>
  )
}
