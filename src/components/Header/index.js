import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaCircle,
  FaPowerOff,
} from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import { Nav } from './styles';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLogged);

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(actions.signInFailure());
    history.push('/');
  };
  return (
    <Nav>
      <Link to="/">
        <FaHome size={21} />
      </Link>
      <Link to="/sign-up">
        <FaUserAlt size={18} />
      </Link>

      {isLoggedIn ? (
        <Link onClick={handleSignOut} to="/sign-out">
          <FaPowerOff size={20} />
        </Link>
      ) : (
        <Link to="/sign-in">
          <FaSignInAlt size={20} />
        </Link>
      )}
      {isLoggedIn && <FaCircle size={15} color="#66ff33" />}
    </Nav>
  );
}

export default Header;
