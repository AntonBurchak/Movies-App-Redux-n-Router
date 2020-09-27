import Film  from './Film'
import { connect } from 'react-redux';
import { setLikedFilm, setDislikedFilm, insertFilmInfo, setStarsOnFilm } from '../../core/actions';

const mapStateToProps = (state) => ({
  films: state.filmlistReducer.films
})

const mapDispatchToProps = ({
  setLikedFilm,
  setDislikedFilm,
  insertFilmInfo,
  setStarsOnFilm
})

const withStore = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default withStore(Film);