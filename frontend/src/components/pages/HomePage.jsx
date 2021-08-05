import React from 'react';
import { Col, Row } from 'react-bootstrap';
import products from '../../products';
import ProductCard from '../shared/ProductCard/ProductCard';

const HomePage = () => {
   return (
      <div>
         <h1>All Headphones</h1>
         <Row>
            {products.map((product) => (
               <Col xs={12} md={6} lg={4}>
                  <ProductCard product={product} />
               </Col>
            ))}
         </Row>
      </div>
   );
};

export default HomePage;
