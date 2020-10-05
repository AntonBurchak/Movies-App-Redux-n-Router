import React , { useCallback } from 'react';
import LogButton from '../log-button';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchLanguages } from '../../core/actions';

const HeaderLinks = (props) => {
    const selectLang = useCallback((lang) => {
        localStorage.setItem('lang', lang);
        alert(lang === 'ua-UA' ? 'Перезавантажте сторінку' : 'Reload the page')
        
    }, [])

    props.fetchLanguages('ua');

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

const mapStateToProps = (state) => ({
    isLogged: state.filmlistReducer.isLogged
})
const mapDispatchToProps = {
    fetchLanguages
}
const withStore = connect(mapStateToProps, mapDispatchToProps);

export default withStore(HeaderLinks);