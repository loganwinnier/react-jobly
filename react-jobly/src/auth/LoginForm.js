import React, { useState, useContext } from "react";
import userContext from "../userContext";

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
function LoginForm( { login }) {

  const [formData, setFormData] = useState("");

  const user = useContext(userContext);

  /** Update local state w/curr state of input elem */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
      evt.preventDefault();
      const trimmedFormData = formData.trim();
      login(trimmedFormData);
      setFormData(trimmedFormData);
  }

  return (
      <form onSubmit={handleSubmit}>
          <input id="login-field"
              value={formData}
              onChange={handleChange} />
          <button>login</button>
      </form>
  );
}

export default LoginForm;