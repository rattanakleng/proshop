import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from 'react-router-bootstrap';

const header = () => {
   return (
      <header>
         <Navbar
            bg='info'
            className='container-fluid'
            expand='lg'
            collapseOnSelect
         >
            <Container>
               <div>
               <LinkContainer to='/'>               
                  <Navbar.Brand className='text-light'>
                     ProShop
                  </Navbar.Brand>
               </LinkContainer>
               </div>

               <div>
                  <Navbar.Toggle
                     aria-controls='navbarScroll'
                     className='text-light'
                  />

                  <Navbar.Collapse id='navbarScroll'>
                     <Nav
                        className='ml-auto text-light'
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                     >
                        <LinkContainer to='/cart'>
                           <Nav.Link className='text-light mr-5'>
                              <FontAwesomeIcon icon={faShoppingCart} /> Cart
                           </Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to='signin'>
                           <Nav.Link href='/signin' className='text-light'>
                              <FontAwesomeIcon icon={faUser} /> Sign in
                           </Nav.Link>
                        </LinkContainer>                        
                     </Nav>
                  </Navbar.Collapse>
               </div>
            </Container>
         </Navbar>
      </header>
   );
};

export default header;
