import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container>
            <Row>
                <Col className='text-center my-4'>
                    TrueOwl Studio Copyright &copy; 2021
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
