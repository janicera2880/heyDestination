import React from 'react';
import headerImage from './Images/capstonelogo.jpg';

const Header = () => {
  return (
    <img
        id="header-image"
        src={headerImage}
        width="330"
        height="230"
        alt="Header Image"
        className="header" />
  );
};

export default Header;