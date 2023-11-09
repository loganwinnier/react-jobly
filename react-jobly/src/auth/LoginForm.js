import React, { useState, useContext } from "react";
import userContext from "../userContext";
import { Navigate, useNavigate } from 'react-router-dom';
import Alert from '../Alert';

const initialFormData = {
  username: "" ,
  password: ""
}

/** Login Form Component
 *
 * State:
 * formData: data from login form
 *
 * Props:
 * -login: a function for logining
 *
 * RouteList --> LoginForm --> Alert
 */
function LoginForm({ login }) {

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(null);
  const user = useContext(userContext);
  const navigate = useNavigate();



  /** Update local state w/curr state of input elem */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }
  /** handleSubmit: attempts to log in and redirect to homepage
   * if failed set error state*/
  async function handleSubmit(evt) {
    evt.preventDefault();
    const loggedIn = await login(formData);
    console.log(loggedIn);
    if (!Array.isArray(loggedIn)) return navigate("/");
    setError(loggedIn);
  }

  if (user) return <Navigate to="/" />;

  return (
    < form onSubmit={handleSubmit} >
      {(error && <Alert error={error[0]} />)}
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button>login</button>
    </form >
  );
}

export default LoginForm;