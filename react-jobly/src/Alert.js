import React from "react";


/**
 * Component for displaying error messages to user
*/
//TODO: have this take in an array of error messages
// add failed/success category for color etc
function Alert({ error }) {
    error = error.replace("instance.", "");
    return (
        <div>
            <p style={{
                backgroundColor: 'salmon'
            }}>{`${ error } :'(`}</p>
        </div>);
}

export default Alert;