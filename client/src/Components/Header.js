import React from 'react';
import headerImg from '../Images/heyDestinationlogo.png';

const Header = () => {
  return (
    <header className="header">
      <img id="header-image" src={headerImg} width="200" height="300"alt="Header Image" className="header-image" />
    </header>
  );
};

export default Header;