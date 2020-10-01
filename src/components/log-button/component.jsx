import React, { useCallback } from 'react';
import { withRouter, Link } from 'react-router-dom'

const LogButton = (props) => {
    const logOut = useCallback(() => {
        props.logOutUser();
        props.history.push('/home');
    }, [])
    
    return (
        <React.Fragment>
            {
                props.isLogged ? <button onClick={logOut}>Logout</button> : <Link to="/login" >Login</Link>
            }
        </React.Fragment>
        // <Link to="/login" >{props.isLogged ? 'Logout' : 'Login'}</Link>
    )
} 
export default withRouter(LogButton)