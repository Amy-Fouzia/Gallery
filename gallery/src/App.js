import React from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Entrance from './pages/Entrance';
import GalleryMachine from './pages/GalleryMachine';
import InfoSlip from './pages/InfoSlip';
import Exit from './assets/EXIT.png';
import About from './pages/About';
import TextChangeOnHover from './components/TextChangeOnHover';


const App = () => {
  return (
    <Router>
      <div style={{ textAlign: 'center', paddingTop: '20px' }}>
        <div class="flex" > 
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <img class=" " src={Exit} />
          </Link>{' '}
          <TextChangeOnHover />
          <p class="pt-28 px-2"> Contact Us </p>
          <Link to="/about" >
          <p class="pt-28 px-2"> About </p>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Entrance />} />
          <Route path="/galleryMachine" element={<GalleryMachine />} />
          <Route path="/infoSlip" element={<InfoSlip />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
