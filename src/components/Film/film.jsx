import React, { useCallback, memo } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { setLikedFilm, setDislikedFilm, insertFilmInfo, setStarsOnFilm } from '../../core/actions';
import { compose } from 'redux';
import translation from '../../hocs/translation';

const Film = (props) => {
    const onStarsChange = (event) => {
        const value = event.target.getAttribute('data-value');
        props.setStarsOnFilm(props.film.id, value);
    }

    const renderStars = (defaultQuantity = 5) => {
        const items = [];

        for (let i = 0; i < defaultQuantity; i++) {
            items.push(
                <button className="star-btn"
                    data-value={i + 1}
                    onClick={onStarsChange}
                    key={i}>

                    <i className={i < props.film.stars ? "fa fa-star star-active" : "fa fa-star"}
                        data-value={i + 1}></i>
                </button>
            )
        }

        return (
            <React.Fragment>
                {items}
            </React.Fragment>
        )
    }

    const { film } = props;

    const setLikedFilm = useCallback(() => {
        props.setLikedFilm(film.id)
    }, [film.id, props])

    const setDislikedFilm = useCallback(() => {
        props.setDislikedFilm(film.id)
    }, [film.id, props])

    console.log('render')
    return (
        
        <div className="app__films-item film" data-id={film.id}>
            <div className="film__main">
                <div className="film__likes">
                    <div className="film__btns">
                        <button className={"film__likes-btn like" + (film.liked ? " active" : "")}
                            onClick={() => props.setLike(film.id)}>

                            <i className="fa fa-thumbs-up"></i>

                        </button>

                        <button className={"film__likes-btn dislike" + (film.disliked ? " active" : "")}
                            onClick={setDislikedFilm}>

                            <i className="fa fa-thumbs-down"></i>

                        </button>
                    </div>
                    <div className="film__likes-main">
                        <span>{film.likes}</span>
                        <span>{props['app-film-likes']}</span>
                    </div>
                </div>
                <div className="film__preview">

                    <Link className="film__title" to={`/film/${film.id}`}>{film.title}</Link>

                    <div className="film__image">

                        <img src={film.posterUrl} alt={film.title} />

                    </div>
                </div>
            </div>
            <div className="film__stars">
                <span>{props['app-film-stars']}: {film.stars}</span>
                {renderStars()}
            </div>
        </div>
    )

}

const mapStateToProps = (state) => ({
    films: state.filmlistReducer.films
})

const mapDispatchToProps = {
    setLikedFilm,
    setDislikedFilm,
    insertFilmInfo,
    setStarsOnFilm
}
const withStore = connect(mapStateToProps, mapDispatchToProps);
const withTranslation = translation([
    'app-film-likes',
    'app-film-stars',
]);

export default compose(
    memo,
    withTranslation,
    withStore
)(Film);
