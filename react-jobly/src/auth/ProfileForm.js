import React, { useState, useContext } from "react";
import Alert from "../Alert";
import { useNavigate } from "react-router-dom";
import userContext from "../userContext";


/** Profile Form Component
 *
 * State:
 * formData: data from registration form
 * errors: null or an array of errors to render
 *
 * Props:
 * -update: a function for updating users
 *
 * RouteList --> ProfileForm --> Alert
 */
function ProfileForm({ update }) {

  const user = useContext(userContext);

  const userInfo = {
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  };

  const [formData, setFormData] = useState(userInfo);
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

  /** handleSubmit: attempts to update user info and redirect to homepage
   * if failed set error state*/
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await update(user.username, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email
      });
      navigate('/');
    } catch (err) {
      console.error(err);
      setErrors(err);
    }
  }

  return (
    < form onSubmit={handleSubmit} className="card form">
      {(errors && <Alert messages={errors} type='error' />)}
      <label htmlFor="username">Username</label>
      <input
        className="search-field form-control-sm mb-2"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        disabled
      />
      <label htmlFor="first-name">First Name</label>
      <input
        className="search-field form-control-sm mb-2"
        id="first-name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <label htmlFor="last-name">Last Name</label>
      <input
        className="search-field form-control-sm mb-2"
        id="last-name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        className="search-field form-control-sm mb-2"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button className="btn btn-info p-0 px-1 m-1 border border-1 border-dark">Update</button>
    </form >
  );
}

export default ProfileForm;