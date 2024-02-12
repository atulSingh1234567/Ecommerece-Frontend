import React,{useRef} from 'react';
import Card from '../card/Card'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Button from '../button/Button'
import { Link } from 'react-router-dom';

export default function Container({boxFor , cardImg}) {
    const containerRef = useRef();
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

   
  return (
    <div className='flex relative px-4 flex-col justify-evenly bg-white' style={{height: '320px' ,minWidth:'95vw', maxWidth: '95vw'}}>
          <h1 className='font-normal text-2xl'>{boxFor}</h1>
          <div ref={containerRef} className='flex overflow-x-scroll items-center gap-1'>
            {
              cardImg.map(function(item , index){
                return <Link key={index} to={`/products/${boxFor}`}> <Card imgSrc={item} name='Soft rabbit' info='upto 70% off'/> </Link>
              })
            }
            <Button onClick={scrollToRight} icon={<ChevronRightIcon />} className='absolute right-0 w-12 border rounded p-4 h-16 bg-white cursor-pointer'/>
            <Button onClick={scrollToLeft} icon={<ChevronLeftIcon />} className='absolute left-0 w-12 border rounded p-4 h-16 bg-white cursor-pointer'/>
               
           
          </div>
    </div>
  )
}
