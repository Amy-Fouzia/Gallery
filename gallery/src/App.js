import React from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Entrance from './pages/Entrance';
import GalleryMachine from './pages/GalleryMachine';
import InfoSlip from './pages/InfoSlip';

const App = () => {
  return (
    <Router>
      <div style={{ textAlign: 'center', paddingTop: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            Entrance Page
          </Link>{' '}
          <Link to="/galleryMachine" style={{ textDecoration: 'none', color: 'black' }}>
            Gallery Machine
          </Link>
        </h1>
        <Routes>
          <Route path="/" element={<Entrance />} />
          <Route path="/galleryMachine" element={<GalleryMachine />} />
          <Route path="/infoSlip" element={<InfoSlip />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
