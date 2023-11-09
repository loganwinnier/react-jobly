import React, { useState, useContext } from "react";
import userContext from "../userContext";

/** register Form Component
 *
 * State:
 * formData: data from registration form
 *
 * Props:
 * -register: a function for
 * RouteList --> RegisterForm --> Alert
 */
function RegisterForm( { register }) {

  const [formData, setFormData] = useState("");

  // do we need this?
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
      register(trimmedFormData);
      setFormData(trimmedFormData);
  }

  return (
      <form onSubmit={handleSubmit}>
          <input id="register-field"
              value={formData}
              onChange={handleChange} />
          <button>register</button>
      </form>
  );
}

export default RegisterForm;