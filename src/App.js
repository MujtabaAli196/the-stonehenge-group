import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// 
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Philosophy from './pages/Philosophy';
import Portfolio from './pages/Portfolio';

// import CSS files
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.scss';

const App = () => (
  <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  </>
);

export default App;
