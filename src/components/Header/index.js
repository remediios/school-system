import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styles';

function Header() {
  return (
    <Nav>
      <a href="/">
        <FaHome size={21} />
      </a>
      <a href="/">
        <FaUserAlt size={18} />
      </a>
      <a href="/">
        <FaSignInAlt size={20} />
      </a>
    </Nav>
  );
}

export default Header;
