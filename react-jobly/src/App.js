import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Nav from './Nav';
import RouteList from './RouteList';
import userContext from "./userContext";




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

  /** Register a new user and update user state */
  async function register(formData) {
    const newUser = await JoblyApi.registerUser(formData);
    setUser(newUser);
  }

  /** Login an existing user and update user state*/
  async function login(formData) {
    const loggedInUser = await JoblyApi.loginUser(formData);
    setUser(loggedInUser);
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
        <Nav logout={logout}/>
        <RouteList register={register} login={login} update={update}/>
      </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
