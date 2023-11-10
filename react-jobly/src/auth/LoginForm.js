import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Alert from '../Alert';

const initialFormData = {
  username: "",
  password: ""
};

/** Login Form Component
 *
 * State:
 * formData: data from login form
 * errors: null or an array of errors
 *
 * Props:
 * -login: a function for logining in existing users
 *
 * RouteList --> LoginForm --> Alert
 */
function LoginForm({ login }) {

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(null);

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
    try {
      await login(formData);
      navigate('/');
    } catch (err) {
      console.log(err);
      setErrors(err);
    }
  }
  const styling = "search-field form-control-sm mb-2";
  return (
    < form onSubmit={handleSubmit} className="card ">
      {(errors && <Alert messages={errors} type='error' />)}
      <label htmlFor="username">Username</label>
      <input className={styling}
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input className={styling}
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        type='password'
      />
      <button className="btn btn-info p-0 px-1 m-1 border border-1 border-dark">login</button>
    </form >
  );
}

export default LoginForm;