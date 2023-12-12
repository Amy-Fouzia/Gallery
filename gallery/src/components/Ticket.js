import React from 'react';
import ticket from '../assets/ticket.png';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GalleryMachine from '../pages/GalleryMachine';


const Ticket = () => {

  return (
    <div>
    <div class="flex flex-col justify-center">
        <img class="px-60" src={ticket} />
        <h1 class="font-sans p-7"> 
        <Link to="/galleryMachine?coins=3" style={{ textDecoration: 'none', color: 'black' }}>
            Collect ticket and Enter
          </Link>
        </h1>
    </div>

    <Routes>
          <Route path="/galleryMachine?coins=3" element={<GalleryMachine />} />
        </Routes>
    </div>
  );
};

export default Ticket;
