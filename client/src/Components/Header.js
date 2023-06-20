import React from 'react';
import headerImage from './Images/headerlogo.png';

const Header = () => {
  return (
    <img
        src={headerImage}
        width="250"
        height="250"
        alt="header"
        className="header" />
  );
};

export default Header;