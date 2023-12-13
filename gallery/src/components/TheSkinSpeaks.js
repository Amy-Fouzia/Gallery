import React from 'react';
import capsule from '../assets/capsuleTheSkinSpeaks.png';
import artImage from '../assets/TheSkinSpeaksALanguageNotItsOwn.jpg';

const TheSkinSpeaks = () => {
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
        Bharti Kher's provocative sculpture, "The Skin Speaks a Language Not Its Own," features a life-sized fiberglass elephant adorned with bindis. This arresting piece explores themes of identity, transformation, and the intersection of traditional and contemporary symbols.
        </p>
      </div>
    </div>
  );
};

export default TheSkinSpeaks;
