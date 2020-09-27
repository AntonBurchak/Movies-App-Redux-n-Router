import FilmsList from './FilmsList'
import { connect } from 'react-redux';
import { fetchFilmsList, fetchActorsList } from '../../core/actions';

const mapStateToProps = (state) => ({
    films: state.filmlistReducer.films
})

const mapDispatchToProps = ({
    fetchFilmsList,
    fetchActorsList
})

const withStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default withStore(FilmsList);