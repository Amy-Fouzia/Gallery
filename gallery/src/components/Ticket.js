import React from 'react';
import ticket from '../assets/ticket.png';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GalleryMachine from '../pages/GalleryMachine';

const Ticket = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link to="/galleryMachine?coins=3" className="font-lato text-dark-brown" style={{ textDecoration: 'none', color: 'black' }}>
        <img className="px-60" src={ticket} alt="Ticket" />
      </Link>
      <h1 className="font-sans p-7">
        <Link to="/galleryMachine?coins=3" className="font-lato text-dark-brown" style={{ textDecoration: 'none', color: 'black' }}>
          Collect ticket and Enter
        </Link>
      </h1>

      <Routes>
        <Route path="/galleryMachine?coins=3" element={<GalleryMachine />} />
      </Routes>
    </div>
  );
};

export default Ticket;
