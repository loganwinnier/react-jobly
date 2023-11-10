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

  return (
    < form onSubmit={handleSubmit} style={{
      display: "flex",
      flexDirection: "column",
      margin: "10px 30%"
    }}>
      {(errors && <Alert messages={errors} type='error' />)}
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
        type="password"
      />
      <label htmlFor="first-name">First Name</label>
      <input
        id="first-name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <label htmlFor="last-name">Last Name</label>
      <input
        id="last-name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button>Signup</button>
    </form >
  );
}

export default RegisterForm;