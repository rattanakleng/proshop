import React from 'react';
import { Col, Row, Container, Badge } from 'react-bootstrap';
import products from '../../products';
import ProductCard from '../shared/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import Hero from '../shared/Hero/Hero';
import Thumbnails from '../shared/Thumbnails';

const HomePage = () => {
   return (
      <Container fluid className='px-0'>
         <Hero />
         <Container className='pb-5'>
            <h1 className='mt-5 mb-3 text-primary display-5 strong'>
               Find a quality and right camera not easy
            </h1>

            <p className='fs-5'>
               <strong>Lorem Ipsum</strong> Lorem ipsum dolor sit amet,
               consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
               labore et dolore magna aliqua. Ut enim ad minim veniam, quis
               nostrud exercitation ullamco laboris nisi ut aliquip ex ea
               commodo consequat. Duis aute irure dolor in reprehenderit in
               voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
               officia deserunt mollit anim id est laborum.
            </p>
         </Container>

         <Container fluid className='py-5 bg-dark'>
            <h3 className='text-light text-center'>
               We will help you to choose the best cameras!
            </h3>
         </Container>

         <Thumbnails />

         <Container fluid className='py-5 bg-dark '>
            <Container className='text-center'>
               <p className='text-primary text-uppercase me-4 fs-5'>
                  THE OFFER IS LIMITED{'  '}
                  <Link to='/' className='ms-3'>
                     <span className='badge rounded-pill'>Learn More</span>
                  </Link>
               </p>

               <h2 className='text-white'>
                  Like it? Pre-order and get a discount
               </h2>
            </Container>
         </Container>

         <Container className='py-5'>
            <h1 className='text-center my-4 text-uppercase text-primary'>
               {' '}
               All Camera{' '}
            </h1>

            <Row>
               {products.map((product) => (
                  <Col xs={12} md={6} lg={4}>
                     <ProductCard product={product} />
                  </Col>
               ))}
            </Row>
         </Container>

         <h1 className='text-center mt-5'>Why do you have to buy camera from us?</h1>

      </Container>
   );
};

export default HomePage;
