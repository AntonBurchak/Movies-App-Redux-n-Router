import React from 'react';
import LogButton from '../log-button';
import { NavLink } from 'react-router-dom';

const HeaderLinks = () => (
    <div className="app__links">
        <NavLink to="/home">Главная</NavLink>
        <LogButton />
    </div>
)

export default HeaderLinks;