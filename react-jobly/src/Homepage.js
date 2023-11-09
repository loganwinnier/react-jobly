import React, { useContext } from 'react';
import userContext from './userContext';



/** Display Component Renders Homepage
 *
 * RoutesList -> Homepage
 */
function Homepage() {

  const user = useContext(userContext);

  return (
    <div>
      <h2>All the jobs. In one convenient place.</h2>
      {user && <h4>Welcome back {user.firstName}</h4>}
    </div>
  );
}


export default Homepage;