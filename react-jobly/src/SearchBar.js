import React, { useState, useEffect } from "react";


/** Search Form Component
 *
 * State:
 * formData: data from search form
 *
 * Props:
 * -search: a function for searching the appropriate data (ie jobs or companies)
 *
 * {CompanyPage, JobPage} --> SearchBar
 */
function SearchBar({ search }) {

    const [formData, setFormData] = useState("");

    /** Update local state w/curr state of input elem */
    function handleChange(evt) {
        setFormData(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        const trimmedFormData = formData.trim();
        search(trimmedFormData);
        setFormData(trimmedFormData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input id="search-field"
                value={formData}
                onChange={handleChange} />
            <button>Search</button>
        </form>
    );
}

export default SearchBar;