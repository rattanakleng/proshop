import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../Rating.jsx';

const ProductCard = ({ product }) => {
   return (
         <Card  className='mt-4 border-0'>
            
            <Link to={`/product/${product._id}`}>
               <Card.Img variant='top' src={product.image} className='rounded-0' />
            </Link>            

            <Card.Body className='bg-dark border-radius-0 border-0'>
               <Link to={`/product/${product._id}`} className='text-decoration-none text-primary'>
                  <Card.Title>{product.name.toUpperCase()}</Card.Title>
               </Link>

               <Rating value={product.rating} text={`${product.numReviews} reviews`} />

               <Card.Text className='mt-3 text-light'>{product.summary}</Card.Text>
            </Card.Body>
         </Card>
   );
};

export default ProductCard;
