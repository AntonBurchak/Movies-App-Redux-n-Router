import { FilmEdit } from './component'
import { connect } from 'react-redux'
import { insertFilmInfo, setChangedFilm } from '../../core/actions'

const mapStateToProps = (state) => ({
    viewed: state.filmlistReducer.viewed,
    actors: state.filmlistReducer.actors
})

const mapDispatchToProps = ({
    insertFilmInfo,
    setChangedFilm
})

const withStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default withStore(FilmEdit);