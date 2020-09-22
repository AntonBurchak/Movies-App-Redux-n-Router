import React from 'react';
import LogButton from '../LogButton/index';
import { NavLink } from 'react-router-dom';

export const HeaderLinks = (props) => {
    

    return (
        <div className="app__links">
            <NavLink to="/home">Главная</NavLink>
            <LogButton/>
        </div>
    )
}