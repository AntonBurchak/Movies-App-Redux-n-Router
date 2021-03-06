import * as constants from './constants';
import * as utils from '../utils/utils';


const initialState = {
    films: null,
    originalFilms: null,
    viewed: null,
    actors: null,
    isLoading: false
}

const filmlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_FILMS_LIST: {
            return state
        }

        case constants.SET_FILMS_LIST: {
            return { ...state, films: state.films }
        }

        case constants.SEARCH_BY_TEXT: {
            const filteredFilms = utils.searchByText(action.text, state.originalFilms);

            return { ...state, films: filteredFilms }
        }

        case constants.SORT_BY: {
            const property = action.property;
            const sorted = [...state.films].sort((left, right) => right[property] - left[property]);

            return { ...state, films: sorted }
        }

        case constants.RESET_SORTING: {
            return { ...state, films: state.originalFilms }
        }

        case constants.SET_LIKED_FILM: {
            const film = state.films.find(film => film.id === action.id);

            let maxLikes = film.likes;
            if (!film.liked) {
                ++maxLikes
                film.disliked = false
            } else {
                --maxLikes
            }

            const { updateFilmsArray, copyModifiedFilms } =
                utils.updateFilmsArray(state, film, 'likes', maxLikes, 'like')

            return { ...state, films: updateFilmsArray, originalFilms: copyModifiedFilms }
        }

        case constants.SET_DISLIKED_FILM: {
            const film = state.films.find(film => film.id === action.id);

            let maxLikes = film.likes;
            if (film.liked) {
                --maxLikes
                film.liked = !film.liked
            }

            const { updateFilmsArray, copyModifiedFilms } =
                utils.updateFilmsArray(state, film, 'likes', maxLikes, 'dislike')

            return { ...state, films: updateFilmsArray, originalFilms: copyModifiedFilms }
        }

        case constants.SET_STARS_ON_FILM: {
            const film = state.films.find(film => film.id === action.id);

            const { updateFilmsArray, copyModifiedFilms } =
                utils.updateFilmsArray(state, film, 'stars', action.stars)

            return { ...state, films: updateFilmsArray, originalFilms: copyModifiedFilms }
        }

        case constants.INSERT_FILM_INFO: {
            return { ...state, viewed: action.film }
        }

        case constants.SET_CHANGED_FILM: {
            const copyFilms = [...state.films];
            const editedFilm = copyFilms.find(el => el.id === action.film.id);
            const index = state.films.findIndex(film => film.id === editedFilm.id);

            copyFilms[index] = action.film;

            return { ...state, films: copyFilms, originalFilms: copyFilms }
        }

        case constants.DELETE_FILM: {
            const copyFilms = state.films.filter(film => film.id !== action.id);

            return { ...state, films: copyFilms, originalFilms: copyFilms }
        }

        case constants.FILMS_LIST_LOADING: {
            console.log('LOADING DATA...')
            return { ...state, isLoading: true };
        }

        case constants.FILMS_LIST_LOADED: {
            console.log('DATA LOADING FINISHED!')

            return { ...state, films: action.payload, originalFilms: action.payload }
        }

        case constants.ACTORS_LIST_LOADED: {
            return { ...state, actors: action.payload }
        }

        case constants.RESET_FILM_INFO: {
            return { ...state, viewed: null }
        }
        
        default: return state;
    }
}
export default filmlistReducer;