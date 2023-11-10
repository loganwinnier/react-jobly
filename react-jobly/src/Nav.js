import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "./userContext";

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
      <nav>
        <Link to='/'> Homepage </Link>
        <Link to='/companies'> Companies </Link>
        <Link to='/jobs'> Jobs </Link>
        <Link to='/profile'> Profile </Link>
        <Link to='/' onClick={logout}> Logout {user.username} </Link>
      </nav>);
  }

  function anonNav() {
    return (
      <nav>
        <Link to='/'> Homepage </Link>
        <Link to='/signup'> Signup </Link>
        <Link to='/login'> Login </Link>
      </nav>
    );
  }

  return (user ? loggedInNav() : anonNav());
}

export default Nav;