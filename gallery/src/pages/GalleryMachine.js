import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Coins from '../components/Coins';
import machine from '../assets/toyvendor.jpeg';

const GalleryMachine = () => {
  const [coinCount, setCoinCount] = useState(3);

  const handleCoinButtonClick = () => {
    // Decrease the coin count by 1
    setCoinCount((prevCount) => Math.max(0, prevCount - 1));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gallery Machine Page</h1>
      <div class="flex justify-center">
      <img src={machine} />
      {/* Display Coins component with coin count */}
      <Coins coinCount={coinCount} />
      </div>
      {/* Button to decrease the coin count */}
      <button
        onClick={handleCoinButtonClick}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        disabled={coinCount === 0}
      >
        Insert Coin
      </button>

      {/* Link to navigate to Info Slip */}
      <Link to="/infoSlip">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Go to Info Slip</button>
      </Link>
    </div>
  );
};

export default GalleryMachine;
