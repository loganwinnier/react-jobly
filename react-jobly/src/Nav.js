import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "./userContext";

/**
 * Component serving navigation links
 *
 * Props:
 * - logout function
 *
 */
function Nav({ logout }) {

  const user = useContext(userContext);

  return (
    <nav>
      <Link to='/'> Homepage </Link>
      { user?
      <>
        <Link to='/companies'> Companies </Link>
        <Link to='/jobs'> Jobs </Link>
        <Link to='/profile'> Profile </Link>
        <Link onClick={logout}> Logout {user.username} </Link>
      </>
      :
      <>
        <Link to='/signup'> Signup </Link>
        <Link to='/login'> Login </Link>
      </>
      }
    </nav>
  )
}

export default Nav;