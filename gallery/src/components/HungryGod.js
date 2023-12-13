import React from 'react';
import capsule from '../assets/capsuleVeryHungryGod.png';
import artImage from '../assets/veryHungryGod.png';

const HungryGod = () => {
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
        Subodh Gupta's monumental sculpture "Very Hungry God" comprises a skull made from countless metal pots and pans. This striking piece reflects on consumer culture, globalization, and the transformation of everyday objects into potent symbols.
        </p>
      </div>
    </div>
  );
};

export default HungryGod;
