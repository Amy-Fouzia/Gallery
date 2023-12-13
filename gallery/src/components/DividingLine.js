import React from 'react';
import capsule from '../assets/capsuleDividingLine.png';
import artImage from '../assets/dividingLine.jpeg';

const DivingLine = () => {
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
        Zarina Hashmi's minimalist artwork "Dividing Line" explores themes of displacement and the partition of India. This woodcut print, with its meticulous lines and geometric precision, becomes a metaphorical representation of the borders that divide nations and people.
        </p>
      </div>
    </div>
  );
};

export default DivingLine;
