import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './bootstrap.min.css';
import './App.css';
import NavigationBar from '../src/components/shared/NavigationBar';
import Footer from '../src/components/shared/Footer';
import HomePage from './components/pages/HomePage';
import ProductPage from './components/pages/ProductPage';

const App = () => {
   return (
      <Router>
         <NavigationBar />
         <Container fluid className='px-0'>
            <Route exact path='/' component={HomePage} />
            {/*:id is a params/place holder for what ever pass in */}
            <Route path='/product/:id' component={ProductPage} />
         </Container>
         <Footer />
      </Router>
   );
};

export default App;
