import React from 'react';
import capsule from '../assets/capsuleGeorgeNelsonClock.png';
import clockImage from '../assets/george_nelson_clock.png';

const GeorgeNelsonClock = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Capsule Image */}
      <img src={capsule} alt="Capsule Image" style={{ width: '550px', margin: '0 10px' }} />

      {/* Rectangular Container */}
      <div style={{ border: '2px solid #ccc', borderRadius: '8px', padding: '20px', width: '550px', margin: '20px 0', position: 'relative' }}>
        {/* Clock Image */}
        <img src={clockImage} alt="Clock Image" style={{ width: '100%', marginBottom: '10px' }} />

        {/* Description */}
        <p style={{ marginBottom: '20px' }}>
        The George Nelson Vitra Sunburst Clock is an iconic mid-century modern wall clock designed by American designer George Nelson. Manufactured by Vitra, this clock features a distinctive sunburst design with radiating wooden spokes, creating a dynamic and visually striking appearance. The clock's unique and timeless design reflects the creativity and innovation characteristic of mid-20th-century modernism. It has become an enduring symbol of that era and a popular piece of decor in contemporary interiors. The Vitra Sunburst Clock is celebrated for its artistic and functional qualities, making it a sought-after collector's item and an iconic representation of mid-century design.
        </p>
      </div>
    </div>
  );
};

export default GeorgeNelsonClock;
