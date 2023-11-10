import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "./userContext";
import './nav.css';

/**
 * Component serving navigation links
 *
 * Props:
 * - logout function
 *
 * App --> Nav
 */
function Nav({ logout }) {
  const user = useContext(userContext);

  function loggedInNav() {
    return (
      <nav className="navbar m-1 p-1 px-5">
        <Link className="link" to='/'> Homepage </Link>
        <Link className="link" to='/companies'> Companies </Link>
        <Link className="link" to='/jobs'> Jobs </Link>
        <Link className="link" to='/profile'> Profile </Link>
        <Link className="link" to='/' onClick={logout}> Logout {user.username} </Link>
      </nav>);
  }

  function anonNav() {
    return (
      <nav className="navbar m-1 p-1 px-5">
        <Link className="link" to='/'> Homepage </Link>
        <Link className="link" to='/signup'> Signup </Link>
        <Link className="link" to='/login'> Login </Link>
      </nav>
    );
  }

  return (user ? loggedInNav() : anonNav());
}

export default Nav;