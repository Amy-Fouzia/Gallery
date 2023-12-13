import React from 'react';
import capsule from '../assets/capsuleHermanMillerChair.png';
import artImage from '../assets/herman_miller_chair.jpg';

const HermanMillerChair = () => {
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
        The Panton Chair by Vitra/Herman Miller Collection is a testament to the enduring legacy of Verner Panton's visionary design, seamlessly blending iconic aesthetics with contemporary craftsmanship. Crafted from a single, molded piece of durable polypropylene, the chair maintains the fluid, sculptural form that made the original Panton Chair a design landmark. Upholding the collaborative spirit of Vitra and Herman Miller, this collection incorporates advanced materials and manufacturing techniques to enhance the chair's longevity and versatility for both indoor and outdoor use. Its ergonomic design, following the natural curves of the body, ensures not only a timeless visual appeal but also a comfortable seating experience. Celebrating the fusion of innovation and style, the Panton Chair by Vitra/Herman Miller Collection stands as a modern classic, embodying the spirit of mid-century design excellence.
        </p>
      </div>
    </div>
  );
};

export default HermanMillerChair;
