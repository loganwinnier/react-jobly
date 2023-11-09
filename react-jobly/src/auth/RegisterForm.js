import React, { useState, useContext } from "react";
import userContext from "../userContext";
import Alert from "../Alert";
import { Navigate, useNavigate } from "react-router-dom";

const initialFormData = {
  username: "" ,
  password: "",
  firstName: "" ,
  lastName: "",
  email: ""
}

/** register Form Component
 *
 * State:
 * formData: data from registration form
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

  const user = useContext(userContext);

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
    // TODO: put try catch here
    const success = await register(formData);

    if (!Array.isArray(success)) return navigate("/");
    // put this in the catch block w err instead of success
    setErrors(success);
  }

  // this will be handled in later step
  if (user) return <Navigate to="/" />;

  // TODO: remove map here after modifying Alert component
  return (
    < form onSubmit={handleSubmit} style={{
      display: "flex",
      flexDirection: "column",
      margin: "10px 30%"
    }}>
      {(errors && errors.map(err => <Alert error={err} />))}
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
      <button>login</button>
    </form >
  );
}

export default RegisterForm;