import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import InfoSlip from './InfoSlip';
import Coins from '../components/Coins';
import machine from '../assets/toyvendor.png';

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 className="font-poppins text-2xl font-bold mb-4">Palette Pod Dispenser</h1>

      {/* Insert Coin button */}
      <button
        onClick={handleInsertCoinClick}
        class="font-poppins bg-silver-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        disabled={coinCount === 0}
        style={{ alignSelf: 'center', marginBottom: '20px' }}
      >
        Insert Coin
      </button>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {/* Image */}
        <img src={machine} alt="Gallery Machine" />

        {/* Display Coins component with coin count */}
        <Coins coinCount={coinCount} style={{ marginLeft: '20px' }} />
      </div>

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
