import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Music from './components/Music';
import Contact from './components/Contact';
import Navbar from './components/Navbar'; // Import the Navbar component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Include the Navbar here */}
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<Music />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
