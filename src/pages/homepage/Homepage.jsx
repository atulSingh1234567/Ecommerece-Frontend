import React, { useEffect, useState } from 'react'
import Hero from '../../components/hero/Hero'
import Container from '../../components/card/Container'

export default function Homepage() {
    const linkArray = ['https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/289c766054a217db.jpg?q=20','https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ca2843e62171405e.jpg?q=20']
    const cardImg = ['https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/m/f/e/cute-pink-rabbit-stuffed-animal-soft-toy-for-kids-playing-long-original-imagwezvzs5efa4g.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/m/f/e/cute-pink-rabbit-stuffed-animal-soft-toy-for-kids-playing-long-original-imagwezvzs5efa4g.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/m/f/e/cute-pink-rabbit-stuffed-animal-soft-toy-for-kids-playing-long-original-imagwezvzs5efa4g.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/m/f/e/cute-pink-rabbit-stuffed-animal-soft-toy-for-kids-playing-long-original-imagwezvzs5efa4g.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/m/f/e/cute-pink-rabbit-stuffed-animal-soft-toy-for-kids-playing-long-original-imagwezvzs5efa4g.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/m/f/e/cute-pink-rabbit-stuffed-animal-soft-toy-for-kids-playing-long-original-imagwezvzs5efa4g.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/m/f/e/cute-pink-rabbit-stuffed-animal-soft-toy-for-kids-playing-long-original-imagwezvzs5efa4g.jpeg?q=70',
                      'https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/m/f/e/cute-pink-rabbit-stuffed-animal-soft-toy-for-kids-playing-long-original-imagwezvzs5efa4g.jpeg?q=70','https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/m/f/e/cute-pink-rabbit-stuffed-animal-soft-toy-for-kids-playing-long-original-imagwezvzs5efa4g.jpeg?q=70']
    
  return (
    <div className='relative flex flex-col gap-4 items-center top-20'>
        <div>
          <Hero imgLink={linkArray}/>
        </div>
        <Container boxFor='Best Deals' cardImg={cardImg}/>
        <Container boxFor='Best of Electronics' cardImg={cardImg} />
        <Container boxFor='Sports, Healthcare & more' cardImg={cardImg} />
        <Container boxFor='Toys & more' cardImg={cardImg} />
        <Container boxFor='Mens wear' cardImg={cardImg} />
        <Container boxFor='kids wear' cardImg={cardImg} />
        <Container boxFor='Womens wear' cardImg={cardImg} />
    </div>
  )
}
