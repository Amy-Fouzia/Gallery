import React from 'react';
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

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Entrance Page</h1>
      <p>info slip</p>
      <RandomComponent />
    </div>
  );
};

export default InfoSlip;