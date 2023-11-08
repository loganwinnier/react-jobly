import React, { useState, useEffect } from "react";


/** Search Form Component
 *
 * State:
 * formData: data from search form
 *
 * Props:
 * -search: a function for searching the appropriate data (ie jobs or companies)
 *
 * CompanyPage, JobPage --> SearchBar
 */
function SearchBar({ search }) {
    const [formData, setFormData] = useState({searchField: ''});
    console.log('FORM DATA=', formData)

    useEffect(function getCompanies() {
        search(formData.searchField);
      }, [formData]);

    /** Update local state w/curr state of input elem */
    function handleChange(evt) {
        const { value } = evt.target;
        setFormData({ searchField: value });
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        search(formData.searchField);
        setFormData({searchField: ''});
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