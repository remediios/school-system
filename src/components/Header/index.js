import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Nav } from './styles';

function Header() {
  const clickedButton = useSelector((state) => state.example.clickedButton);
  return (
    <Nav>
      <Link to="/">
        <FaHome size={21} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={18} />
      </Link>
      <Link to="/logout">
        <FaSignInAlt size={20} />
      </Link>
      {clickedButton ? 'test' : 'test2'}
    </Nav>
  );
}

export default Header;
