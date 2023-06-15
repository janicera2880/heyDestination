import React from 'react';
import headerImage from './Images/capstonelogo.jpg';

const Header = () => {
  return (
    <img
        src={headerImage}
        width="330"
        height="230"
        alt="header"
        className="header" />
  );
};

export default Header;