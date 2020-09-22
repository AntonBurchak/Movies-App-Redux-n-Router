import React from 'react';
import { Link } from 'react-router-dom';
import './filminfo.scss';

export function FilmInfo(props) {
    const { viewed, insertFilmInfo, actors, deleteFilm } = props;

    const id = +props.match.params.id;
    insertFilmInfo(id);

    const parseActors = (actorsIds) => { // 0, 1, 2, 3
        const actorsThatInclues = actors.filter(actor => actorsIds.includes(actor.id))

        return actorsThatInclues.map(actor => {
            return (
                <Link key={+actor.id + toString(20)} to={`/actor/${actor.id}`}>{actor.name} </Link>
            )
        })
    }

    return (
        <React.Fragment>
            {viewed ? (
                <React.Fragment>
                    <Link to={`/film-edit/${id}`}>Редактировать</Link>
                    <button onClick={() => deleteFilm(id)}>Удалить</button>

                    <div className="app__filminfo-left">
                        <b>{viewed.title}</b> <br />
                        likes: {viewed.likes} <br />
                        stars: {viewed.stars}
                    </div>
                    <div className="app__filminfo-right">
                        <img src={viewed.posterUrl} alt={viewed.title} />
                        <p><b>Director:</b> {viewed.director}</p>
                        <p><b>Actors:</b> {parseActors(viewed.actorsIds)}</p>
                        <p><b>Genres:</b> {viewed.genres.join(', ')}</p>
                        <p><b>Description:</b> {viewed.description}</p>
                    </div>
                </React.Fragment>
            ) : <h3>Выберите фильм</h3>}
        </React.Fragment>
    )
}

