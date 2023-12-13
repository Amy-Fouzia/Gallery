// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import TextChangeOnHover from './TextChangeOnHover';
import Exit from '../assets/EXIT.png';

const Header = () => {
  return (
    <div className="flex border-b-1.5 border-solid border-dark-brown bg-fae0af font-delagothicone">
      <Link to="/" style={{ textDecoration: 'none', color: '#3E2723' }}>
        <img className=" " src={Exit} alt="Exit" />
      </Link>
      <p className="pt-28 px-2"> </p>
      <Link to="/" style={{ textDecoration: 'none', color: '#3E2723' }}>
        <TextChangeOnHover />
      </Link>
      <p className="pt-28 px-2"> </p>
      <p className="pt-28 px-2"> </p>
      <Link to="/contact">
        <p className="pt-28 px-2"> Contact Us </p>
      </Link>
      <p className="pt-28 px-2"> </p>
      <Link to="/about">
        <p className="pt-28 px-2"> About </p>
      </Link>
    </div>
  );
};

export default Header;
