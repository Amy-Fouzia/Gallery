import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GeorgeNelsonClock from '../components/GeorgeNelsonClock';
import HermanMillerChair from '../components/HermanMillerChair';
import RajaMatches from '../components/RajaMatches';
import Mahishasura from '../components/Mahishasura';
import TheSkinSpeaks from '../components/TheSkinSpeaks';
import Bhopal from '../components/Bhopal';
import HungryGod from '../components/HungryGod';
import DividingLine from '../components/DividingLine';
import VanishedBlood from '../components/VanishedBlood';
import Anand from '../components/Anand';
import Tongue from '../components/Tongue';
import Mother from '../components/Mother';

const components = [GeorgeNelsonClock, HermanMillerChair, RajaMatches, Mahishasura, TheSkinSpeaks, Bhopal, HungryGod, DividingLine, VanishedBlood, Anand, Tongue, Mother];

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
      <button 
        onClick={handleCloseClick} 
        className="font-poppins bg-silver-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        style={{ alignSelf: 'center', marginBottom: '20px' }}>
        Keep
      </button>
      <br></br>
      
    </div>
  );
};

export default InfoSlip;
