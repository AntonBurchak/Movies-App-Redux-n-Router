import React from 'react';
import Film from '../film'
import './films.scss'

const FilmsList = (props) => {
    if (!props.films) {
        props.fetchFilmsList();
        props.fetchActorsList();
        return <img src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt=""/>
    }

    return (
        <div className="app__films">
            {props.films.map((film, index) => {
                return (
                    <Film key={index} film={film} />
                )
            })}
        </div>
    )

}

export default FilmsList;