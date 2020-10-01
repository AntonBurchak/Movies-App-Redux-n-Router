import React from 'react';
import Film from '../film'
import './films.scss'

const FilmsList = (props) => {
    if (props.films) {
        return (
            <div className="app__films">
                {props.films.map(film => <Film key={film.id} film={film} />)}
            </div>
        )
    } else {
        props.fetchFilmsList();
        props.fetchActorsList();
        return <img src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt=""/>
    }
}

export default FilmsList;