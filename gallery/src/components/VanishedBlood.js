import React from 'react';
import capsule from '../assets/capsuleInSearch.png';
import artImage from '../assets/InSearchOfVanishedBlood.jpg';

const VanishedBlood = () => {
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
        Nalini Malani's multimedia installation "In Search of Vanished Blood" incorporates painting, video, and shadow play to address themes of violence and the impact of historical events. Malani's work is known for its immersive and thought-provoking nature.
        </p>
      </div>
    </div>
  );
};

export default VanishedBlood;
