import React from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Entrance from './pages/Entrance';
import GalleryMachine from './pages/GalleryMachine';
import InfoSlip from './pages/InfoSlip';

const App = () => {
  return (
    <Router>
      <div>
        <div>
          <Link to="/entrance">Go to Entrance Page</Link> <br></br>
        </div>
        <Routes>
          <Route path="/entrance" element={<Entrance />} />
          <Route path="/galleryMachine" element={<GalleryMachine />} />
          <Route path="/infoSlip" element={<InfoSlip />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
