import FilmEdit from './component'
import { connect } from 'react-redux'
import { insertFilmInfo, setChangedFilm, updateFilmInfo } from '../../core/actions'

const mapStateToProps = (state) => ({
    viewed: state.filmlistReducer.viewed,
    actors: state.filmlistReducer.actors,
    films: state.filmlistReducer.films,
})

const mapDispatchToProps = ({
    insertFilmInfo,
    setChangedFilm,
    updateFilmInfo
})

const withStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default withStore(FilmEdit);