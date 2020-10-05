import React from 'react';
import translation from '../../hocs/translation';
import './film-info.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { insertFilmInfo, deleteFilm, fetchFilmInfo, resetFilmInfo, fetchActorsList } from '../../core/actions'


 class FilmInfo extends React.Component {
    componentDidMount() {
        const id = +this.props.match.params.id;
        this.props.fetchActorsList()
        
        if(!this.props.viewed || this.props.viewed.id !== id) {
            this.props.fetchActorsList();
            this.props.fetchFilmInfo(id);
        }
    }

    componentWillUnmount() {
        // this.props.resetFilmInfo();
    }

    parseActors = (actorsIds) => { 
        const actorsThatInclues = this.props.actors.filter(actor => actorsIds.includes(actor.id))
        return actorsThatInclues.map(actor => <Link key={+actor.id + toString(20)} to={`/actor/${actor.id}`}>{actor.name}</Link>)
    }

    render () {
        const props = this.props;
        const id = +props.match.params.id;
        
        return (
            <React.Fragment>
                {
                props.viewed ? (
                    <React.Fragment>
                        <Link to={`/film-edit/${id}`}>{props['app-filmpage-edit']}</Link>
                        <button onClick={() => props.deleteFilm(id)}>{props['app-filmpage-remove']}</button>

                        <div className="app__filminfo-left">
                            <b>{props.viewed.title}</b> <br />
                            {props['app-film-likes']}: {props.viewed.likes} <br />
                            {props['app-film-stars']}: {props.viewed.stars}
                        </div>
                        <div className="app__filminfo-right">
                            <img src={props.viewed.posterUrl} alt={props.viewed.title} />
                            <p><b>{props['app-filmpage-director']}:</b> {props.viewed.director}</p>
                            <p><b>{props['app-filmpage-actors']}:</b> {this.parseActors(props.viewed.actorsIds)}</p>
                            <p><b>{props['app-filmpage-genres']}:</b> {props.viewed.genres.join(', ')}</p>
                            <p><b>{props['app-filmpage-description']}:</b> {props.viewed.description}</p>
                        </div>
                    </React.Fragment>
                ) : <img src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt=""/>
                }
            </React.Fragment>
        )
   }
}
const mapStateToProps = (state) => ({
    viewed: state.filmlistReducer.viewed,
    films: state.filmlistReducer.films,
    actors: state.filmlistReducer.actors,
})

const mapDispatchToProps = {
    insertFilmInfo,
    deleteFilm,
    fetchFilmInfo,
    resetFilmInfo,
    fetchActorsList
}
const withStore = connect(mapStateToProps, mapDispatchToProps);
const withTranslation = translation([
    'app-filmpage-edit',
    'app-filmpage-remove',
    'app-filmpage-director',
    'app-filmpage-actors',
    'app-filmpage-genres',
    'app-filmpage-description',
    'app-film-likes',
    'app-film-stars'
]);


// export default withTranslation((withStore(FilmInfo)));
export default compose(
    withTranslation,
    withStore
)(FilmInfo)