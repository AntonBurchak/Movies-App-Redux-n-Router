import { FilmInfo } from './FilmInfo';
import { connect } from 'react-redux'
import { insertFilmInfo, deleteFilm } from '../../core/actions'

const mapStateToProps = (state) => ({
    viewed: state.filmlistReducer.viewed,
    films: state.filmlistReducer.films,
    actors: state.filmlistReducer.actors,
})

const mapDispatchToProps = ({
    insertFilmInfo,
    deleteFilm
})

const withStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default withStore(FilmInfo);