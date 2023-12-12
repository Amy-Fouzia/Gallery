import React, {useState} from 'react';

const TextChangeOnHover = () => {
    const [text, setText] = useState('किस्मत गैलरी');
  
    const handleMouseOver = () => {
      setText('Kismat Gallery');
    };
  
    const handleMouseOut = () => {
      setText('किस्मत गैलरी');
    };
  
    return (
      <h1 class="cursor-none text-4xl font-bold mb-4" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {text}
      </h1>
    );
  };

export default TextChangeOnHover;
