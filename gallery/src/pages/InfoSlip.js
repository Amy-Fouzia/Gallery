import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GeorgeNelsonClock from '../components/GeorgeNelsonClock';
import HermanMillerChair from '../components/HermanMillerChair';
import RajaMatches from '../components/RajaMatches';

const components = [GeorgeNelsonClock, HermanMillerChair, RajaMatches];

const getRandomComponent = () => {
  const randomIndex = Math.floor(Math.random() * components.length);
  return components[randomIndex];
};

const InfoSlip = () => {
  const RandomComponent = getRandomComponent();
  const navigate = useNavigate();
  const location = useLocation();

  const handleCloseClick = () => {
    const coinCount = location?.search ? parseInt(new URLSearchParams(location.search).get('coins'), 10) : 0;

    // Navigate back to GalleryMachine with the updated coin count
    navigate(`/galleryMachine?coins=${coinCount}`);
  };

  // Get the updated coin count from the query parameter
  const updatedCoinCount = location?.search ? parseInt(new URLSearchParams(location.search).get('coins'), 10) : 0;

  return (
    <div>
      <RandomComponent />

      {/* Close button to navigate back to GalleryMachine */}
      <button onClick={handleCloseClick} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Keep
      </button>
    </div>
  );
};

export default InfoSlip;
