import React from 'react';
import capsule from '../assets/capsuleAnand.png';
import artImage from '../assets/AnandWithHisBookOfPoems.png';

const Anand = () => {
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
        Atul Dodiya's "Anand with his Book of Poems" is a captivating exploration of portraiture and literary inspiration. Known for his distinctive blend of painting and assemblage, Dodiya depicts the poet Anand as a contemplative figure holding a book of poems. The layered composition incorporates elements of collage and textured surfaces, highlighting Dodiya's engagement with both visual and literary arts. The artwork becomes a nuanced tribute to the creative process, inviting viewers to delve into the realms of poetry and visual interpretation.
        </p>
      </div>
    </div>
  );
};

export default Anand;
