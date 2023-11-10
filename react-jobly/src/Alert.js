import React from "react";
import { v4 as uuid } from 'uuid';

/**
 * Component for displaying error messages to user
*/
function Alert({ messages, type }) {
    const color = (type === 'error' ? 'salmon' : 'darkseagreen');
    return (
        <div>
            {messages.map(msg => <p key={uuid()} style={{ backgroundColor: color }}>{`${ msg.replace("instance.", "") } :'(`}</p>)}
        </div>);
}

export default Alert;