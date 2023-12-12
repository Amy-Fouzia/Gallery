import React from 'react';
import backgroundImage from '../assets/paper.jpeg';
import clock from '../assets/clock.jpeg';


const GeorgeNelsonClock = () => {

  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl pt-80 font-bold">George Nelson Clock</h1>
        <div class="flex justify-center">
          <img class="w-1/5" src={clock} />
        </div>
      </div>
    </div>
  );
};

export default GeorgeNelsonClock;
