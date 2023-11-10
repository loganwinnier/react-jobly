import React, { useState } from "react";
import Alert from "../Alert";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: ""
};

/** register Form Component
 *
 * State:
 * formData: data from registration form
 * errors: null or an array of errors to render
 *
 * Props:
 * -register: a function for registering new users
 *
 * RouteList --> RegisterForm --> Alert
 */
function RegisterForm({ register }) {

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

  /** handleSubmit: attempts to register a new user and redirect to homepage
   * if failed set error state*/
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await register(formData);
      navigate('/');
    } catch (err) {
      console.log(err);
      setErrors(err);
    }
  }

  const styling = "search-field form-control-sm mb-2";
  return (
    < form onSubmit={handleSubmit} className="card">
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
        type="password"
      />
      <label htmlFor="first-name">First Name</label>
      <input className={styling}
        id="first-name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <label htmlFor="last-name">Last Name</label>
      <input className={styling}
        id="last-name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input className={styling}
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button className="btn btn-info p-0 px-1 m-1 border border-1 border-dark">Signup</button>
    </form >
  );
}

export default RegisterForm;