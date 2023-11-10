import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";

import './App.css';
import Nav from './Nav';
import RouteList from './RouteList';
import userContext from "./userContext";
import JoblyApi from './api';
import LoadingSpinner from './LoadingSpinner';


/**
 * Renders RouteList and Nav bar
 *
 * State:
 * - token / string, updated with a useEffect
 * - user /  object populated by using token to call getUser api
 *  {username: "test" , password: "pw", firstName: "t" , lastName: "t", email: "t@t"}}
 *
 * Index -> App -> {RouteList, Nav}
 */
function App() {

  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState(null);

  console.log('TOKEN=', token);
  console.log('USER=', user);

  useEffect(() => {
    /** update JoblyApi class token with current token
     * if valid token exists, populate user state with current user info
     * updates when token changes, sets user back to null
     */
    async function getUserInfo() {

      if (token) {
        try {
          const { username } = jwtDecode(token);
          JoblyApi.token = token;
          localStorage.setItem('token', JoblyApi.token);
          const userInfo = await JoblyApi.getUser(username);
          setUser(userInfo);
        } catch (err) {
          console.warn(err);
          setToken(null);
        }
      }
      else {
        setUser(null);
        JoblyApi.token = null;
        localStorage.removeItem('token');
      };
    };
    getUserInfo();
  }, [token]);


  /** Register a new user and update user state */
  async function register(registerData) {
    const userToken = await JoblyApi.registerUser(registerData);
    setToken(userToken);
  }

  /** Login an existing user and update user state*/
  async function login(loginData) {
    const userToken = await JoblyApi.loginUser(loginData);
    setToken(userToken);
  }

  /** Update profile information for existing user and update state */
  async function update(username, profileData) {
    const updatedUser = await JoblyApi.updateUser(username, profileData);
    // errors don't get this far
    setUser(updatedUser);
  }

  /** Logout a user and clear user state */
  function logout() {
    setToken(null);
  }

  if (token && !user) return <LoadingSpinner />;

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={user}>
          <Nav logout={logout} />
          <RouteList register={register} login={login} update={update} />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
