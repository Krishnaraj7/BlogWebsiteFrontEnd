import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import post from '../assets/1.png';
import post2 from '../assets/2.png';
import post3 from '../assets/imgg.jpg';
import { Link } from 'react-router-dom';

function Content() {
  return (
    <>
        <Container className='mx-auto mt-16'>
          <Row className='justify-center'>
            <Col sm={12} md={4} className='text-center mx-2'>
              <Link to={'/singlepost'}>
                <img src={post} alt="" className='mb-2 mx-auto max-w-full' />
              </Link>
              <h4 className='text-lg font-semibold'>Technology</h4>
              <p className='text-sm text-gray-500'>Description for Image 1</p>
            </Col>
        
            <Col sm={12} md={3} className='text-center mx-2'>
            <Link to={'/singlepost'}>
              <img src={post2} alt="" className='mb-2 mx-auto max-w-full' />
              </Link>
              <h4 className='text-lg font-semibold'>Foods</h4>
              <p className='text-sm text-gray-500'>Description for Image 2</p>
            </Col>
        
            <Col sm={12} md={4} className='text-center mx-2'>
            <Link to={'/singlepost'}>
              <img src={post3} alt="" className='mb-2 mx-auto max-w-full' />
              </Link>
              <h4 className='text-lg font-semibold'>Travels</h4>
              <p className='text-sm text-gray-500'>Description for Image 3</p>
            </Col>
          </Row>
        </Container>
        
    </>
  );
}

export default Content;
