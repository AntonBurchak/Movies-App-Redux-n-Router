import FilmInfo from './FilmInfo';
import { connect } from 'react-redux'
import { insertFilmInfo, deleteFilm, fetchFilmInfo, resetFilmInfo } from '../../core/actions'

const mapStateToProps = (state) => ({
    viewed: state.filmlistReducer.viewed,
    films: state.filmlistReducer.films,
    actors: state.filmlistReducer.actors,
})

const mapDispatchToProps = ({
    insertFilmInfo,
    deleteFilm,
    fetchFilmInfo,
    resetFilmInfo
})

const withStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default withStore(FilmInfo);