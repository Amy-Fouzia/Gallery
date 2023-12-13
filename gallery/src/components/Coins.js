import React from 'react';
import coinImage from '../assets/coin.png';

const Coins = ({ coinCount }) => {
  return (
    <div>
      <div className="flex-row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50px' }}>
        {Array.from({ length: coinCount }).map((_, index) => (
          <img key={index} src={coinImage} alt={`Coin ${index + 1}`} className="w-16 h-16 mr-2" />
        ))}
      </div>
    </div>
  );
};

export default Coins;
