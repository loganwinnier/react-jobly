import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
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
 *
 * Index -> App -> RouteList, Nav
 */
function App() {

  const [user, setUser] = useState(null);

  console.log(user);
  /** Register a new user and update user state */
  async function register(formData) {
    try {
      const userToken = await JoblyApi.registerUser(formData);
      setUser({ userToken, username: formData.username });
      return true;
    } catch (err) {
      return err;
    }
  }

  /** Login an existing user and update user state*/
  async function login(formData) {
    try {
      const userToken = await JoblyApi.loginUser(formData);
      setUser({ userToken, username: formData.username });
      return true;
    }
    catch (err) {
      return err;
    }
  }

  /** Update profile information for existing user and update state */
  async function update(formData) {
    const updatedUser = await JoblyApi.updateUser(formData);
    setUser(updatedUser);
  }

  /** Logout a user and clear user state */
  function logout() {
    setUser(null);
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
