import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";

import './App.css';
import Nav from './Nav';
import RouteList from './RouteList';
import userContext from "./userContext";
import JoblyApi from './api';


/**
 * Renders RouteList and Nav bar
 *
 * State:
 * - user / user context
 * - token / token context
 *
 * Index -> App -> RouteList, Nav
 */
function App() {

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  console.log('TOKEN=', token)
  console.log('USER=', user)

  useEffect(() => {
    /** update JoblyApi class token with current token
     * if valid token exists, populate user state with current user info
     * updates when token changes, sets user back to null
     */
    async function getUserInfo() {
      JoblyApi.token = token;

      if (token) {
        const decoded = jwtDecode(token);
        const userInfo = await JoblyApi.getUser(decoded.username);
        setUser(userInfo);
      }
      else { setUser(null); };
    }
    getUserInfo();
  }, [token]);


  /** Register a new user and update user state */
  async function register(formData) {
    try {
      const userToken = await JoblyApi.registerUser(formData);
      setToken(userToken);
      return true;
    } catch (err) {
      return err;
    }
  }

  /** Login an existing user and update user state*/
  async function login(formData) {
    try {
      const userToken = await JoblyApi.loginUser(formData);
      setToken(userToken);
      return true;
    }
    catch (err) {
      return err;
    }
  }

  /** Update profile information for existing user and update state */
  async function update(formData) {
    const updatedUser = await JoblyApi.updateUser(formData);
    // maybe rethink this
    setUser(updatedUser);
  }

  /** Logout a user and clear user state */
  function logout() {
    setToken(null);
  }

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
