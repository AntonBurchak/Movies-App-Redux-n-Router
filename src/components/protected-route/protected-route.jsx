import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';


const ProtectedRoute = ({ component: Component, isLogged, ...rest}) => (
    <Route {...rest} render={(props) => (
      isLogged ? <Component {...props} /> : <Redirect to='/login' />
    )} />
)

const mapStateToProps = (state) => ({
  isLogged: state.usersReducer.isLogged,
})

const withStore = connect(
  mapStateToProps
)

export default withStore(ProtectedRoute);