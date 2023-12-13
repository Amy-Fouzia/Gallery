import React from 'react';
import capsule from '../assets/capsuleBhopal.png';
import artImage from '../assets/bhopalTragedy.jpg';

const Bhopal = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Capsule Image */}
      <img src={capsule} alt="Capsule Image" style={{ width: '550px', margin: '0 10px' }} />

      {/* Rectangular Container */}
      <div style={{ border: '2px solid #ccc', borderRadius: '8px', padding: '20px', width: '550px', margin: '20px 0', position: 'relative' }}>
        {/* Clock Image */}
        <img src={artImage} alt="Art Image" style={{ width: '100%', marginBottom: '10px' }} />

        {/* Description */}
        <p style={{ marginBottom: '20px' }}>
        Renowned photographer Raghu Rai documented the aftermath of the Bhopal Gas Tragedy in 1984, capturing the human suffering and environmental devastation caused by the industrial disaster. His photographs serve as a poignant testimony to the consequences of corporate negligence.
        </p>
      </div>
    </div>
  );
};

export default Bhopal;
