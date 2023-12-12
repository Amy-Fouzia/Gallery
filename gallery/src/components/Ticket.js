import React from 'react';
import ticket from '../assets/tick.png';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GalleryMachine from '../pages/GalleryMachine';


const Ticket = () => {

  return (
    <div>
    <div class="flex flex-col justify-center">
        <img class="px-60" src={ticket} />
        <h1 class="font-delagothicone"> 
        <Link to="/galleryMachine" style={{ textDecoration: 'none', color: 'black' }}>
            Collect ticket and Enter
          </Link>
        </h1>
    </div>

    <Routes>
          <Route path="/galleryMachine" element={<GalleryMachine />} />
        </Routes>
    </div>
  );
};

export default Ticket;
