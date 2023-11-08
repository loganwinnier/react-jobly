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
    console.log("rerender");
    const [formData, setFormData] = useState("");
    console.log('FORM DATA=', formData);

    useEffect(function reRender() {
        return function cleanUp() { console.log("cleaned up"); };
    }, []);

    /** Update local state w/curr state of input elem */
    function handleChange(evt) {
        setFormData(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        search(formData);
        setFormData("");
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