import React from 'react';
import capsule from '../assets/capsuleMahishasura.png';
import artImage from '../assets/mahishasura.jpg';

const Mahishasura = () => {
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
        Tyeb Mehta's "Mahishasura" is a seminal work in Indian contemporary art. This painting, part of his celebrated "Trilogy" series, reinterprets the traditional mythological narrative of the demon Mahishasura's battle with the goddess Durga. Mehta's use of bold lines and vibrant colors conveys a sense of dynamic tension and struggle.
        </p>
      </div>
    </div>
  );
};

export default Mahishasura;
