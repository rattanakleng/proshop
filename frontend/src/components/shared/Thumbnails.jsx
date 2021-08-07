import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Thumbnails = () => {
    return (
        <Container className='my-5'>
            <Row>
               <Col lg={3} md={4} sm={6}>
                  <Image
                     fluid
                     src='/Images/homepage/pexels-photo-5.jpg'
                     alt='Thumnail'
                     className='mt-4'
                  />
               </Col>

               <Col lg={3} md={4} sm={6}>
                  <Image
                     fluid
                     src='/Images/homepage/pexels-photo-2.jpg'
                     alt='Thumnail'
                     className='mt-4'
                  />
               </Col>

               <Col lg={3} md={4} sm={6}>
                  <Image
                     fluid
                     src='/Images/homepage/pexels-photo-7.jpg'
                     alt='Thumnail'
                     className='mt-4'
                  />
               </Col>

               <Col lg={3} md={4} sm={6}>
                  <Image
                     fluid
                     src='/Images/homepage/pexels-photo-8.jpg'
                     alt='Thumnail'
                     className='mt-4'
                  />
               </Col>

               <Col lg={3} md={4} sm={6}>
                  <Image
                     fluid
                     src='/Images/homepage/pexels-photo-12.jpg'
                     alt='Thumnail'
                     className='mt-4'
                  />
               </Col>

               <Col lg={3} md={4} sm={6}>
                  <Image
                     fluid
                     src='/Images/homepage/pexels-photo-4.jpg'
                     alt='Thumnail'
                     className='mt-4'
                  />
               </Col>

               <Col lg={3} md={4} sm={6}>
                  <Image
                     fluid
                     src='/Images/homepage/pexels-photo-13.jpg'
                     alt='Thumnail'
                     className='mt-4'
                  />
               </Col>

               <Col lg={3} md={4} sm={6}>
                  <Image
                     fluid
                     src='/Images/homepage/pexels-photo-1.jpg'
                     alt='Thumnail'
                     className='my-4'
                  />
               </Col>
            </Row>
         </Container>
    )
}

export default Thumbnails
