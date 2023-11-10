import React from "react";

function LoadingSpinner({ title }) {
    return (
        <>
            <h2>loading... {title}</h2>
            <div className="spinner-border text-info p-3" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

        </>
    );
}

export default LoadingSpinner;