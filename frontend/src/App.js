import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import './bootstrap.min.css';
import './App.css';
import Header from '../src/components/shared/Header';
import Footer from '../src/components/shared/Footer';

const App = () => {
   return (
      <Fragment>
         <Header />
         <Container>
            <h1> Welcome </h1>
         </Container>

         <Footer />
      </Fragment>
   );
};

export default App;
