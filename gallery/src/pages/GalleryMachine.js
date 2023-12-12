import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import InfoSlip from './InfoSlip';
import Coins from '../components/Coins';

const GalleryMachine = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Parse the "coins" parameter from the URL
  const initialCoinCount = parseInt(new URLSearchParams(location.search).get('coins'), 10);
  const [coinCount, setCoinCount] = useState(initialCoinCount);

  const handleInsertCoinClick = () => {
    if (coinCount > 0) {
      setCoinCount((prevCount) => {
        const updatedCount = prevCount - 1;
        navigate(`/infoSlip?coins=${updatedCount}`);
        return updatedCount;
      });
    }
  };

  useEffect(() => {
    // Update coin count when the URL changes
    const updatedCoinCount = parseInt(new URLSearchParams(location.search).get('coins'), 10);
    setCoinCount(updatedCoinCount);
  }, [location.search]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gallery Machine Page</h1>

      {/* Display Coins component with correct coin count */}
      <Coins coinCount={coinCount} />

      {/* Button to insert coin and navigate to InfoSlip */}
      <button
        onClick={handleInsertCoinClick}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        disabled={coinCount === 0}
      >
        Insert Coin
      </button>

      {/* Routes for GalleryMachine and InfoSlip */}
      <Routes>
        {/* Route for InfoSlip */}
        <Route
          path="/infoSlip"
          element={<InfoSlip coinCount={coinCount} setCoinCount={setCoinCount} />}
        />
      </Routes>
    </div>
  );
};

export default GalleryMachine;
