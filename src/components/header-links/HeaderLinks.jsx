import React , { useCallback } from 'react';
import LogButton from '../log-button';
import { NavLink } from 'react-router-dom';

const HeaderLinks = () => {

    const selectLang = useCallback((lang) => {
        localStorage.setItem('lang', lang);
        alert(lang === 'ua-UA' ? 'Перезавантажте сторінку' : 'Reload the page')
    }, [])

    return (
        <div className="app__links">
            <NavLink to="/home">Главная</NavLink>
                <div>
                    <button onClick={() => selectLang('ua-UA')}>ua</button>
                    <button onClick={() => selectLang('en-EN')}>eng</button>
                </div>
            <LogButton />
        </div>
    )
}


export default HeaderLinks;