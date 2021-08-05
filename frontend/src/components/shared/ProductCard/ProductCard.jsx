import React from 'react';
import { Card } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Rating from '../Rating.jsx';

const ProductCard = ({ product }) => {
   return (
         <Card  className='mt-4 border-0'>
            <Router>
               <Link to="/">
                  <Card.Img variant='top' src={product.image} className='rounded-0' />
                </Link>
            </Router>

            <Card.Body className='bg-info border-radius-0 border-0'>
               <Card.Title>{product.name.toUpperCase()}</Card.Title>

               <Rating value={product.rating} text={`${product.numReviews} reviews`} />

               <Card.Text className='mt-3 text-light'>{product.description}</Card.Text>
            </Card.Body>
         </Card>
   );
};

export default ProductCard;
