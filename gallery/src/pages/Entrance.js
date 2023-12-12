import React from 'react';
import TextChangeOnHover from '../components/TextChangeOnHover';
import Ticket from '../components/Ticket';


const Entrance = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4"> Join Us and See What's on View </h1>

      <div class="flex flex-col justify-center">
            
      <Ticket />
      <br />
      </div>
    </div>
  );
};

export default Entrance;
