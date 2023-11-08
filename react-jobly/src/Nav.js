import React from "react";
import { Link } from "react-router-dom";

/**
 * Component serving navigation links
 *
 */
function Nav() {
  return (
    <nav>
      <Link to='/'> Homepage </Link>
      <Link to='/companies'> Companies </Link>
      <Link to='/jobs'> Jobs </Link>
    </nav>
  )
}

export default Nav;