import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductPage = () => {
    return (
        <Container>
            <Link to='/'>
                <p>GO BACK</p>
            </Link>          
        </Container>
    )
};

export default ProductPage;
