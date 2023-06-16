import React from 'react';
import headerImage from './Images/headerlogo.png';

const Header = () => {
  return (
    <img
        src={headerImage}
        width="200"
        height="200"
        alt="header"
        className="header" />
  );
};

export default Header;