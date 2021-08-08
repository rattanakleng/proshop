import React from 'react';
import {
   Container,
   Row,
   Col,
   Image,
   ListGroup,
   Card,
   Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../shared/Rating';
import products from '../../products';

const ProductDetailPage = ({ match }) => {
   const product = products.find((p) => p._id === match.params.id);
   return (
      <Container className='my-5 pt-5'>
         <Link to='/'>
            <span class='badge rounded-pill bg-primary mb-5'> GO BACK </span>
         </Link>

         <h2 className='mb-3'>{product.name}</h2>

         <Row>
            <Col sm={12} md={6}>
               <Image fluid src={product.image} alt={product.title} />
            </Col>

            <Col sm={12} md={3}>
               <ListGroup variant='flush'>
                  <ListGroup.Item>
                     <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                     />
                  </ListGroup.Item>
                  <ListGroup.Item> {`Price: $${product.price}`}</ListGroup.Item>
                  <ListGroup.Item>
                     <strong>Description:</strong> {product.description}
                  </ListGroup.Item>
               </ListGroup>
            </Col>

            <Col sm={12} md={3}>
               <ListGroup>
                  <ListGroup.Item>
                     <Row>
                        <Col>Price: </Col>
                        <Col className='fw-bold'>${product.price}</Col>
                     </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                     <Row>
                        <Col>Status:</Col>
                        <Col className='fw-bold'>
                           {product.countInStock > 0 ? (
                              'In stock'
                           ) : (
                              <span className='text-danger'>Out of stock</span>
                           )}
                        </Col>
                     </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                     <Button className='btn btn-primary rounded-pill'>ADD TO CARD</Button>
                  </ListGroup.Item>
               </ListGroup>
            </Col>
         </Row>
      </Container>
   );
};

export default ProductDetailPage;
