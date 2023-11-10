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
    console.log(formData);

    useEffect(() => {
        search(formData);
    }, [formData]);

    /** Update local state w/curr state of input elem */
    function handleChange(evt) {
        setFormData(evt.target.value);
    };

    function handleSubmit(evt) {
        evt.preventDefault();
        const trimmedFormData = formData.trim();
        search(trimmedFormData);
        setFormData(trimmedFormData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="search-field form-control-sm mt-3 mb-2"
                value={formData}
                onChange={handleChange} />
            <button className="btn btn-info p-0 px-1 m-1 border border-1 border-dark">Search</button>
        </form>
    );
}

export default SearchBar;