import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

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
                  <Navbar.Brand href='/home' className='text-light'>
                     ProShop
                  </Navbar.Brand>
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
                        <Nav.Link href='/cart' className='text-light mr-3'>
                           <FontAwesomeIcon icon={faShoppingCart} /> Cart
                        </Nav.Link>
                        <Nav.Link href='/signin' className='text-light'>
                           <FontAwesomeIcon icon={faUser} /> Signin
                        </Nav.Link>
                     </Nav>
                  </Navbar.Collapse>
               </div>
            </Container>
         </Navbar>
      </header>
   );
};

export default header;
