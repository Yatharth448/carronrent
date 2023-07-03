import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import Products from './components/pages/Products';
import BookNow from './components/BookNow';
import Linking  from './components/pages/Linking'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/contactus' element={<ContactUs/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/BookNow' element={<BookNow/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;