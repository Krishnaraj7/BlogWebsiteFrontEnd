import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import post from '../assets/post01.jpg'
import post1 from '../assets/post02.jpg'
import post2 from '../assets/post3.jpg'
import post3 from '../assets/post04.jpg'
import post4 from '../assets/post05.jpg'
import { Link } from 'react-router-dom'

function Posts() {
  return (
    <div className='w-[80%] md:px-20 mx-auto '>
        <Container >
       <Row >
       
         <Col  md={4} className='mb-5'>
         <Link to={'/singlepost'}>
          <img src={post} alt="" />
      </Link>
         <h1 className='text-xl font-semibold'>Relationships</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis impedit animi repudiandae aliquam. Cupiditate culpa excepturi ad </p>
        
         
         </Col>
       
       
        <Col  md={4} className='mb-5'>
      <Link to={'/singlepost'}>
          <img src={post1} alt="" />
      </Link>
        <h1 className='text-xl font-semibold'>Working</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis impedit animi repudiandae aliquam. Cupiditate culpa excepturi ad </p>
      
        </Col>
        <Col  md={4} className='mb-5'>
        <Link to={'/singlepost'}>
          <img src={post2} alt="" />
      </Link>
        <h1 className='text-xl font-semibold'>News</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis impedit animi repudiandae aliquam. Cupiditate culpa excepturi ad </p>
        
        </Col>
        <Col  md={4} className='mb-5'>
        <Link to={'/singlepost'}>
          <img src={post3} alt="" />
      </Link>
        <h1 className='text-xl font-semibold'>Health</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis impedit animi repudiandae aliquam. Cupiditate culpa excepturi ad </p>
        
        </Col>
        <Col  md={4} className='mb-5'>
        <Link to={'/singlepost'}>
          <img src={post4} alt="" />
      </Link>
        <h1 className='text-xl font-semibold'>Fashion</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis impedit animi repudiandae aliquam. Cupiditate culpa excepturi ad </p>
        
        </Col>
       </Row>
        
         
      
      
        </Container>
        </div>
  )
}

export default Posts