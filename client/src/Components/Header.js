import React from 'react';
import headerImage from './Images/headerlogo.png';

const Header = () => {
  return (
    <img
        id="header-image"
        src={headerImage}
        width="400"
        height="360"
        alt="Header Image"
        className="header" />
  );
};

export default Header;