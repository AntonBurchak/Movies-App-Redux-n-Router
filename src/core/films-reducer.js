
import { GET_FILMS_LIST } from './constants'
import { SET_FILMS_LIST } from './constants'
import { SEARCH_BY_TEXT } from './constants'
import { SORT_BY } from './constants'
import { RESET_SORTING } from './constants'
import { SET_LIKED_FILM } from './constants'
import { SET_DISLIKED_FILM } from './constants'
import { SET_STARS_ON_FILM } from './constants'
import { INSERT_FILM_INFO } from './constants'
import { SET_LOGGED } from './constants'
import { SET_CHANGED_FILM } from './constants'
import { DELETE_FILM } from './constants'


import {data} from '../data'
import * as utils from './utils';


const initialState = {
    films: data.movies,
    originalFilms: data.movies,
    viewed: null,
    isLogged: false,
    actors: data.actors
}

const filmlistReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case GET_FILMS_LIST: {
            return state
        }

        case SET_FILMS_LIST: {
            return {...state, films: state.films}
        }

        case SEARCH_BY_TEXT: {
            const filteredFilms = utils.searchByText(action.text, state.originalFilms);

            return {...state, films: filteredFilms}
        }

        case SORT_BY: {
            const { films } = state, property = action.property;
            const sorted = [...films].sort((a, b) => b[property] - a[property]);

            return {...state, films: sorted}
        }

        case RESET_SORTING: {
            return {...state, films: state.originalFilms}
        }

        case SET_LIKED_FILM: {
            const { films } = state, { id } = action;
            const film = films.find(film => film.id === id);

            let maxLikes = film.likes;
            if (!film.liked) {
                ++maxLikes
                film.disliked = false
            } else {
                --maxLikes
            }

            const {updateFilmsArray, copyModifiedFilms} = 
            utils.updateFilmsArray(state, film, 'likes', maxLikes, 'like')

            return {...state, films: updateFilmsArray, originalFilms: copyModifiedFilms}
        }

        case SET_DISLIKED_FILM: {
            const { films } = state, { id } = action;
            const film = films.find(film => film.id === id);

            let maxLikes = film.likes;
            if (film.liked) {
              --maxLikes
              film.liked = !film.liked
            }

            const { updateFilmsArray, copyModifiedFilms } = 
            utils.updateFilmsArray(state, film, 'likes', maxLikes, 'dislike')

            return {...state, films: updateFilmsArray, originalFilms: copyModifiedFilms}
        }

        case SET_STARS_ON_FILM: {
            const { films } = state;
            const { stars, id } = action;

            const film = films.find(film => film.id === id);
            
            const { updateFilmsArray, copyModifiedFilms } = 
            utils.updateFilmsArray(state, film, 'stars', stars)

            return {...state, films: updateFilmsArray, originalFilms: copyModifiedFilms}
        }
        
        case INSERT_FILM_INFO: {
            const { films } = state, id = action.id;
            const film = films.find(film => film.id === id);

            return {...state, viewed: film}
        }
        
        case SET_LOGGED: {
            return {...state, isLogged: action.logged}
        }

        case SET_CHANGED_FILM: {
            const { films } = state;
            const { film } = action;
            const copyFilms = [...films];
            const editedFilm = copyFilms.find(el => el.id === film.id);
            const index = films.findIndex(film => film.id === editedFilm.id);

            copyFilms[index] = action.film;

            return {...state, films: copyFilms, originalFilms:copyFilms}
        }
        case DELETE_FILM: {
            const { films } = state;
            const { id } = action;

            const copyFilms = films.filter(film => film.id !== id);

            return {...state, films: copyFilms, originalFilms: copyFilms}
        }
        default: return state;
    }
}
export default filmlistReducer;