import FilmsList from './FilmsList'
import { connect } from 'react-redux';
import { getFilmsList } from '../../core/actions';

const mapStateToProps = (state) => ({
    films: state.filmlistReducer.films
})

const mapDispatchToProps = ({
    getFilmsList
})

const withStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default withStore(FilmsList);