import React from "react";
import { Link, Navigate } from "react-router-dom";

/**
 * Component serving links
 *
 * Props:
 * -
 * TODO:DOCSTRING
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