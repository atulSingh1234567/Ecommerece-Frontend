import React,{useRef} from 'react';
import Card from '../card/Card'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '../button/Button'

export default function Container({boxFor , cardImg}) {
    const containerRef = useRef();
    const scrollToRight = ()=>{
        const container = containerRef.current;
        const scrollAmount = 150;
        container.scrollLeft += scrollAmount;
    }
  return (
    <div className='flex relative px-4 flex-col justify-evenly bg-white' style={{height: '320px' ,minWidth:'95vw', maxWidth: '95vw'}}>
          <h1 className='font-normal text-2xl'>{boxFor}</h1>
          <div ref={containerRef} className='flex overflow-x-scroll items-center gap-1'>
            {
              cardImg.map(function(item , index){
                return <Card key={index} imgSrc={item} name='Soft rabbit' info='upto 70% off'/>
              })
            }
            <Button onClick={scrollToRight} icon={<ChevronRightIcon />} className='absolute right-0 w-12 border rounded p-4 h-16 bg-white cursor-pointer'/>
               
           
          </div>
    </div>
  )
}
