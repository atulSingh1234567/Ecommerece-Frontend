import React,{useEffect, useRef,useState} from 'react';
import Card from '../card/Card'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Button from '../button/Button'
import axios from 'axios';

export default function Container({boxFor , ctg}) {
    const containerRef = useRef();
    const [cardImg , setCardImg] = useState([]);
    const category  = boxFor
    const scrollToRight = ()=>{
        const container = containerRef.current;
        const scrollAmount = 150;
        container.scrollLeft += scrollAmount;
    }
    const scrollToLeft = ()=>{
      const container = containerRef.current;
      const scrollAmount= 150;
      container.scrollLeft -= scrollAmount;
    }
   
    useEffect(
      ()=>{
        if(category !== 'best deals'){
          // console.log(category)
        axios.post(`http://localhost:8000/api/v1/products?limit=15`, {category : category})
        .then(
          (response)=>{
              setCardImg(response.data.products);
              // console.log("data from /products route has been fetched: " , response.data);
              // console.log(response.data)
          }
        )
        .catch(
          (error)=>{
            console.log("error in the /products route has error: " , error);
          }
        )
        }
        else{
          axios.get(`http://localhost:8000/api/v1/best-deals?limit=15`)
          .then(
            (res)=>{

              setCardImg(res.data.actualProd)
              // console.log(res.data)
            }
          )
          .catch(
            (err)=>{
              console.log(err)
            }
          )
        }
      }, []
    )
   
  return (
    <div className='flex relative px-4 flex-col justify-evenly bg-white' style={{height: '320px' ,minWidth:'95vw', maxWidth: '95vw'}}>
          <h1 className='font-normal text-2xl'>{boxFor}</h1>
          <div ref={containerRef} className='flex overflow-x-scroll items-center gap-1'>
            {
              cardImg.map(function(item , index){
                return  <Card goto={`/products/${boxFor}`} key={index} imgSrc={item.img} name={item.productname} prodId={item._id} price={item.price} info={`upto ${Math.floor(item.discount)}% off`}/>
              })
            }
            <Button onClick={scrollToRight} icon={<ChevronRightIcon />} className='absolute right-0 w-12 border rounded p-4 h-16 bg-white cursor-pointer'/>
            <Button onClick={scrollToLeft} icon={<ChevronLeftIcon />} className='absolute left-0 w-12 border rounded p-4 h-16 bg-white cursor-pointer'/>
          </div>
    </div>
  )
}
