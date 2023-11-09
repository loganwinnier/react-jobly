
/**
 * Component for displaying error messages to user
*/
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