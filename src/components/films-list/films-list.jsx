import React, { useCallback, memo } from 'react';
import Film from '../film'
import './films-list.scss'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchFilmsList, fetchActorsList, setLikedFilm } from '../../core/actions';

const FilmsList = (props) => {
    const setLike = useCallback((id) => {
        return props.setLikedFilm(id)
    }, [props])
    
    if (props.films) {
        return (
            <div className="app__films">
                {props.films.map(film => <Film key={film.id} film={film} setLike={setLike}/>)}
            </div>
        )
    } else {
        props.fetchFilmsList();
        props.fetchActorsList();
        return <img src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt=""/>
    }
}
const mapStateToProps = (state) => ({
    films: state.filmlistReducer.films
})
const mapDispatchToProps = { fetchFilmsList, fetchActorsList, setLikedFilm }
const withStore = connect(mapStateToProps, mapDispatchToProps)
export default compose(
    memo,
    withStore
)(FilmsList);
