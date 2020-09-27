import React from 'react';
import { Link } from 'react-router-dom';
import './film-info.scss';

 class FilmInfo extends React.Component {

    componentDidMount() {
        const { viewed, fetchFilmInfo, match } = this.props;
        const id = +match.params.id;
        
        if(!viewed || viewed.id !== id) {
            fetchFilmInfo(id);
        }
    }

    componentWillUnmount() {
        this.props.resetFilmInfo();
    }

    parseActors = (actorsIds) => { 
        const actorsThatInclues = this.props.actors.filter(actor => actorsIds.includes(actor.id))

        return actorsThatInclues.map(actor => {
            return (
                <Link key={+actor.id + toString(20)} to={`/actor/${actor.id}`}>{actor.name} </Link>
            )
        })
    }

   render () {
       const { viewed, deleteFilm } = this.props;
       const id = +this.props.match.params.id;
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
                            <p><b>Actors:</b> {this.parseActors(viewed.actorsIds)}</p>
                            <p><b>Genres:</b> {viewed.genres.join(', ')}</p>
                            <p><b>Description:</b> {viewed.description}</p>
                        </div>
                    </React.Fragment>
                ) : <img src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt=""/>}
            </React.Fragment>
        )
   }
}

export default FilmInfo;