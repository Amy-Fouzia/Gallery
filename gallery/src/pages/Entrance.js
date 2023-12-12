import React from 'react';
import Ticket from '../components/Ticket';

const Entrance = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4"> Welcome to the किस्मत Gallery</h1>
      <div class="flex flex-col justify-center">
      <h3> Hours: </h3>
      <table class="table-fixed"> 
          <tr> Saturday 9:00 am - 7:00 pm </tr>
          <tr> Sunday 10:00 am - 5:00 pm </tr>
      </table>
      <br />
      <p class="w-3/5 text-jusitfy px-20"> Step into a world where kismat and luck intertwine with art at our 
        immersive virtual exhibition. Here, the artworks you encounter and 
        the stories you unravel are dictated by the unpredictable play of 
        destiny. Each visitor requires a golden ticket for entry, a key 
        granting three opportunities at the gallery machine. With each try, 
        the veil of chance reveals a selection of stunning artworks, guiding 
        you through a unique journey of discovery and learning. Brace yourself 
        for an experience where fate dances with artistry, and each turn of the 
        wheel unveils a new chapter of artistic wonder. </p>

      <p class="text-right px-60 pb-10"> Present your ticket to enter. </p>
      
      <Ticket />
      <br />
      </div>
    </div>
  );
};

export default Entrance;
