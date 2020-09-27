import React from 'react';
import { Redirect, Route } from 'react-router-dom';


const ProtectedRoute = ({ component: Component, isLogged, ...rest}) => (
    <Route {...rest} render={(props) => (
      isLogged ? <Component {...props} /> : <Redirect to='/login' />
    )} />
)

export default ProtectedRoute;