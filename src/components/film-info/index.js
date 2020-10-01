import FilmInfo from './FilmInfo';
import { connect } from 'react-redux'
import { insertFilmInfo, deleteFilm, fetchFilmInfo, resetFilmInfo, fetchActorsList } from '../../core/actions'
import withTranslation from '../../hocs/withTranslation';


const mapStateToProps = (state) => ({
    viewed: state.filmlistReducer.viewed,
    films: state.filmlistReducer.films,
    actors: state.filmlistReducer.actors,
})

const mapDispatchToProps = ({
    insertFilmInfo,
    deleteFilm,
    fetchFilmInfo,
    resetFilmInfo,
    fetchActorsList
})

const withStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

const words = [
    'app-filmpage-edit',
    'app-filmpage-remove',
    'app-filmpage-director',
    'app-filmpage-actors',
    'app-filmpage-genres',
    'app-filmpage-description',
    'app-film-likes',
    'app-film-stars'
]

export default withTranslation(words)(withStore(FilmInfo));