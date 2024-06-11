import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.js'; 
import Destination from './Components/Destination.js';
import Contact from './Components/Contact.js';
import Price from './Components/Price.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Destination />
        <Price />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
