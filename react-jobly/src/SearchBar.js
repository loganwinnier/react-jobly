import React, { useState } from "react";

/** Search Form Component
 * 
 * State: 
 * formData: data from search form
 * 
 * Props: 
 * -search: a function for searching 
 * 
 * CompanyPage, JobPage --> SearchBar
 */
function SearchBar({ search }) {
    const [formData, setFormData] = useState();

    /** Update local state w/curr state of input elem */
    function handleChange(evt) {
        const { value } = evt.target;
        setFormData({ searchField: value });
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        search(formData.searchField);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input id="search-field"
                name="searchField"
                value={FormData.searchField}
                onChange={handleChange} />
            <button>Search</button>
        </form>
    );
}

export default SearchBar;