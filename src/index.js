import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize-scss'
import './index.css';

import App from './App';

import { users } from './users'

if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(users));
}

ReactDOM.render(<App />, document.getElementById('root'));
