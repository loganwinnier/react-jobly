import React, { useState } from "react";

/** profile Form Component
 *
 * State:
 * formData: data from profile form
 *
 * Props:
 * -update: a function for
 *
 * {CompanyPage, JobPage} --> profileBar
 */
function ProfileForm({ update }) {

  const [formData, setFormData] = useState("");

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
    setFormData(trimmedFormData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input id="profile-field"
        value={formData}
        onChange={handleChange} />
      <button>profile</button>
    </form>
  );
}

export default ProfileForm;