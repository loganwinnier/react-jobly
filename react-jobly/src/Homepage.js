import React, { useContext } from 'react';
import userContext from './userContext';
import './homepage.css';



/** Display Component Renders Homepage
 *
 * RoutesList -> Homepage
 */
function Homepage() {

  const user = useContext(userContext);

  return (
    <div>
      <h1 className='mt-5'>All the jobs. In one convenient place.</h1>
      {user && <h2 className='mt-5'>Welcome back {user.firstName}</h2>}
    </div>
  );
}


export default Homepage;