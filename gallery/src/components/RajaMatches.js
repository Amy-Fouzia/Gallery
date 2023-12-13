import React from 'react';
import capsule from '../assets/capsuleRajaMatches.png';
import artImage from '../assets/vintage_indian_matches.jpg';

const RajaMatches = () => {
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
        Vintage Indian Raja Matches epitomize the artistic beauty of a bygone era, showcasing intricate illustrations and vibrant designs that capture the essence of Indian culture. These timeless matchbox covers serve as miniature masterpieces, featuring colorful depictions of mythological figures, folklore, and scenes from daily life. Each matchbox tells a unique story, reflecting the craftsmanship and cultural richness that define India's artistic heritage. Beyond their functional use, these vintage matchboxes have become coveted collectibles, cherished for their nostalgic charm and ability to transport enthusiasts to the heart of India's diverse traditions. Whether displayed as a curated collection or appreciated individually, Vintage Indian Raja Matches stand as artistic treasures, preserving the vibrant spirit of a bygone era.
        </p>
      </div>
    </div>
  );
};

export default RajaMatches;
