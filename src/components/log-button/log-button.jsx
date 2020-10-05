import React, { useCallback } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOutUser } from '../../core/actions'

const LogButton = (props) => {
    const logOut = useCallback(() => {
        props.logOutUser();
        props.history.push('/home');
    }, [])
    
    return props.isLogged ? <button onClick={logOut}>Logout</button> : <Link to="/login" >Login</Link>   
} 

const mapStateToProps = (state) => ({
    isLogged: state.usersReducer.isLogged
})
const mapDispatchToProps = { logOutUser };
const withStore = connect(mapStateToProps,mapDispatchToProps);

export default withStore(withRouter(LogButton));