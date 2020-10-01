import Film  from './Film'
import { connect } from 'react-redux';
import { setLikedFilm, setDislikedFilm, insertFilmInfo, setStarsOnFilm } from '../../core/actions';
import withTranslation from '../../hocs/withTranslation';


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

const words = [
  'app-film-likes',
  'app-film-stars',
]

export default withTranslation(words)(withStore(Film));