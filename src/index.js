import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize-scss'
import './index.css';

import App from './App';

if(!localStorage.getItem('lang')) {
    localStorage.setItem('lang','ua-UA');
}


ReactDOM.render(<App />, document.getElementById('root'));
