import React from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Entrance from './pages/Entrance';
import GalleryMachine from './pages/GalleryMachine';
import InfoSlip from './pages/InfoSlip';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div class="text-dark-brown" style={{ textAlign: 'center' }}>
        <Header />
        <br></br>
        <Routes>
          <Route path="/" element={<Entrance />} />
          <Route path="/galleryMachine" element={<GalleryMachine />} />
          <Route path="/infoSlip" element={<InfoSlip />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
