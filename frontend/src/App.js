import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import './bootstrap.min.css';
import './App.css';
import Header from '../src/components/shared/Header';
import Footer from '../src/components/shared/Footer';
import HomePage from './components/pages/HomePage';

const App = () => {
   return (
      <Fragment>
         <Header />
         
         <Container>
            <HomePage />
         </Container>

         <Footer />
      </Fragment>
   );
};

export default App;
