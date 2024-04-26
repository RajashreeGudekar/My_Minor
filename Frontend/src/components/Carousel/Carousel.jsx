import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import './Carousel.css'

function CarouselPage() {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img style={{height:'92vh'}}
        className="d-block w-100"
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZh3EVka3krwC9r3dLCNEyh1wW6DLmJUgMWQ&usqp=CAU'
        alt="First slide"
      />
      <Carousel.Caption>
        <h1>JusticeFY <i className='fa  fa-balance-scale'></i></h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt tempore eius laborum eligendi, ullam recusandae fugiat impedit dolores est hic quod, dolor perspiciatis, illo a odit in sint praesentium qui inventore illum voluptates aperiam! Accusantium.
        </p>
        <div className='icon'>
       <i className='fa fa-search'></i>
       <i className='fa fa-bell'></i>
       <i className='fa fa-user'></i>
       <i className='fa fa-hammer'></i>
       <i className='fa  fa-university'></i>
      
       <i className='fa   fa-file-text'></i>
     </div>
      </Carousel.Caption>
      
     

    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'92vh'}}
        className="d-block w-100"
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZh3EVka3krwC9r3dLCNEyh1wW6DLmJUgMWQ&usqp=CAU'
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>JusticeFY <i className='fa  fa-balance-scale'></i></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eligendi, sint commodi omnis consectetur laborum exercitationem totam sequi iste. Quia, distinctio nulla voluptatibus nihil corporis odit nemo, doloribus ipsum qui obcaecati enim, consectetur eos aliquam!</p>
        <div className='icon'>
       <i className='fa fa-search'></i>
       <i className='fa fa-bell'></i>
       <i className='fa fa-user'></i>
       <i className='fa fa-hammer'></i>
       <i className='fa  fa-university'></i>
      
       <i className='fa   fa-file-text'></i>
     </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'92vh'}}
        className="d-block w-100"
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZh3EVka3krwC9r3dLCNEyh1wW6DLmJUgMWQ&usqp=CAU'
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>JusticeFY <i className='fa  fa-balance-scale'></i></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dicta natus beatae fuga laborum repellat voluptatem doloribus, officia distinctio tenetur modi rem quia ullam aperiam ab accusantium deserunt cupiditate! Voluptatum ratione sapiente magnam vel animi!
        </p>
        <div className='icon'>
       <i className='fa fa-search'></i>
       <i className='fa fa-bell'></i>
       <i className='fa fa-user'></i>
       <i className='fa fa-hammer'></i>
       <i className='fa  fa-university'></i>
      
       <i className='fa   fa-file-text'></i>
     </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default CarouselPage