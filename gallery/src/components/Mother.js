import React from 'react';
import capsule from '../assets/capsuleMyMother.png';
import artImage from '../assets/myMother.png';

const Mother = () => {
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
        Arpita Singh's "My Mother" is a poignant painting that combines vibrant colors and intricate details to depict a personal and emotive narrative. Singh's work often explores themes of familial relationships, memory, and the passage of time.
        </p>
      </div>
    </div>
  );
};

export default Mother;
