import React from 'react';
import capsule from '../assets/capsuleInYourTongue.png';
import artImage from '../assets/ForInYourTongueICannotHide.jpg';

const Tongue = () => {
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
        Shilpa Gupta's interactive installation "For, in your tongue, I cannot hide" consists of a room filled with microphones hanging from the ceiling. Visitors are invited to speak into the microphones, triggering a chorus of whispers. The piece explores issues of censorship, surveillance, and individual expression.
        </p>
      </div>
    </div>
  );
};

export default Tongue;
