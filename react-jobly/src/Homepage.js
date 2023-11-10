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
    <div className='homepage'>
      <h1 className='title'>Jobly</h1>
      <img className='logo-img' alt='logo ' src='https://www.svgrepo.com/show/85068/job.svg' />
      <h2 className='title'>All the jobs. In one convenient place.</h2>
      {user && <h3 className='subtitle'>Welcome back {user.firstName}</h3>}
    </div>
  );
}


export default Homepage;