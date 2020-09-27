import React from 'react';
import './App.scss';

import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import configureStore from './core/configure-store'

import Homepage from './components/homepage';
import Login from './components/login';
import Registration from './components/registration';
import HeaderLinks from './components/header-links';
import FilmInfo from './components/film-info';
import FilmEdit from './components/film-edit';
import Actor from './components/actor';
import ProtectedRoute from './components/protected-route';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="app">
        <HeaderLinks />
        <Switch>
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Registration} />

          <ProtectedRoute path='/film/:id' component={FilmInfo} />
          <ProtectedRoute path='/film-edit/:id' component={FilmEdit} />
          <ProtectedRoute path='/actor/:id' component={Actor} />

          <Route path="**" component={() => (<h2>404</h2>)} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
