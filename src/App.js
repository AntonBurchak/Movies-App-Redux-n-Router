import React from 'react';
import './App.scss';

import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import { configureStore } from './core/configureStore'

import Homepage from './components/Homepage'; 
import Login from './components/Login';
import Registration from './components/Registration';
import HeaderLinks from './components/HeaderLinks';
import FilmInfo from './components/FilmInfo';
import FilmEdit from './components/FilmEdit';
import Actor from './components/Actor';
import ProtectedRoute from './components/ProtectedRoute';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <div className="app">
                <HeaderLinks />
                <Switch>
                    <Route exact path="/home" component={Homepage}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/registration" component={Registration}/>

                    <ProtectedRoute path='/film/:id' component={FilmInfo} />
                    <ProtectedRoute path='/film-edit/:id' component={FilmEdit} />
                    <ProtectedRoute path='/actor/:id' component={Actor} />

                    <Route path="**" component={() => (<h2>404</h2>)}/>
                    <Redirect to="/home"/>
                </Switch>
            </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
