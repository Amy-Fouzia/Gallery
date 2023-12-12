import React from 'react';
import { Link } from 'react-router-dom';

const GalleryMachine = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gallery Machine Page</h1>
      <p>gallery machine</p>

      <Link to="/infoSlip">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Go to Info Slip</button>
      </Link>
    </div>
  );
};

export default GalleryMachine;
