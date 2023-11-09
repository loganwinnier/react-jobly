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

  // TODO:make separate functions that return the JSX for user nav routes and not
  // then use those in the ternary
  return (
    <nav>
      <Link to='/'> Homepage </Link>
      {user ?
        <>
          <Link to='/companies'> Companies </Link>
          <Link to='/jobs'> Jobs </Link>
          <Link to='/profile'> Profile </Link>
          <Link to='/' onClick={logout}> Logout {user.username} </Link>
        </>
        :
        <>
          <Link to='/signup'> Signup </Link>
          <Link to='/login'> Login </Link>
        </>
      }
    </nav>
  );
}

export default Nav;