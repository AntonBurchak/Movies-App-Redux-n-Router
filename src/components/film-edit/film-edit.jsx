import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { insertFilmInfo, setChangedFilm, updateFilmInfo, fetchFilmsList } from '../../core/actions'
import { compose } from 'redux';

import '../film-info/film-info.scss';
import './form-edit.scss';

class FilmEdit extends React.Component {
    componentDidMount() {
        if (this.props.viewed) {
            this.props.fetchFilmsList();
        } else {
            const id = +this.props.match.params.id;
            const film = this.props.films.find(film => film.id === id);

            this.props.insertFilmInfo(film);
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.props.viewed ? (
                    <React.Fragment>
                        <form action="" className="formEdit" onSubmit={this.props.handleSubmit}>
                            <label>
                                <span>Title</span>
                                <Field type="text"
                                    name="title"
                                    component="input" />
                            </label>
                            <label>
                                <span>Image src</span>
                                <Field type="text"
                                    name="posterUrl"
                                    component="input"
                                />
                            </label>
                            <label>
                                <span>Director</span>
                                <Field type="text"
                                    name="director"
                                    component="input"
                                />
                            </label>
                            <label>
                                <span>Actors (type with commas ',')</span>
                                <Field type="text"
                                    name="actorsIds"
                                    component="input"
                                />
                            </label>
                            <label>
                                <span>Genres (type with commas ',')</span>
                                <Field type="text"
                                    name="genres"
                                    component="input"
                                />
                            </label>
                            <label>
                                <span>Description</span>
                                <Field name="description"
                                    component="textarea"
                                />
                            </label>
                            <button>Save</button>
                        </form>

                    </React.Fragment>
                ) : <h3>Выберите фильм</h3>}
            </React.Fragment>
        )
    }
}


const mapDispatchToProps = (dispatch, ownProps) => ({
    insertFilmInfo,
    setChangedFilm,
    updateFilmInfo,
    fetchFilmsList,
    onSubmit: (data) => {
        const prepareData = {
            ...data,
            actorsIds: data.actorsIds.toString().split(',').map(actor => +actor),
            genres: data.genres.toString().split(',')
        }
        dispatch(updateFilmInfo(data.id, prepareData));
        ownProps.history.push(`/film/${data.id}`);
    },
})
const mapStateToProps = (state) => ({
    viewed: state.filmlistReducer.viewed,
    actors: state.filmlistReducer.actors,
    films: state.filmlistReducer.films,
    initialValues: {
        id: state.filmlistReducer.viewed.id,
        title: state.filmlistReducer.viewed.title,
        posterUrl: state.filmlistReducer.viewed.posterUrl,
        director: state.filmlistReducer.viewed.director,
        actorsIds: state.filmlistReducer.viewed.actorsIds,
        genres: state.filmlistReducer.viewed.genres,
        description: state.filmlistReducer.viewed.description,
        likes: state.filmlistReducer.viewed.likes,
        stars: state.filmlistReducer.viewed.stars,
        liked: state.filmlistReducer.viewed.liked
    }
})

const withReduxForm = reduxForm({ form: 'filmEdit' });
const withStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withStore,
    withReduxForm
)(FilmEdit);