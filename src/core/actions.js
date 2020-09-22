import { GET_FILMS_LIST } from './constants'
import { SET_FILMS_LIST } from './constants'
import { SEARCH_BY_TEXT } from './constants'
import { SORT_BY } from './constants'
import { RESET_SORTING } from './constants'
import { SET_LIKED_FILM } from './constants'
import { SET_DISLIKED_FILM } from './constants'
import { SET_STARS_ON_FILM } from './constants'
import { GENERATE_HASH } from './constants'
import { INSERT_FILM_INFO } from './constants'
import { SET_LOGGED } from './constants'
import { SET_CHANGED_FILM } from './constants'
import { DELETE_FILM } from './constants'

export const getFilmsList = (payload) => ({
    type: GET_FILMS_LIST,
    payload
}) 

export const setFilmsList = (payload) => ({
    type: SET_FILMS_LIST,
    payload
}) 

export const searchByText = (payload) => ({
    type: SEARCH_BY_TEXT,
    text: payload
})

export const sortBy = (payload) => ({
    type: SORT_BY,
    property: payload
})

export const resetSorting = () => ({
    type: RESET_SORTING
})

export const setLikedFilm = (payload) => ({
    type: SET_LIKED_FILM,
    id: payload
})

export const setDislikedFilm = (payload) => ({
    type: SET_DISLIKED_FILM,
    id: payload
})

export const setStarsOnFilm = (id, stars) => ({
    type: SET_STARS_ON_FILM,
    id,
    stars
})

export const generateHash = () => ({
    type: GENERATE_HASH
})

export const insertFilmInfo = (id) => ({
    type: INSERT_FILM_INFO,
    id
})

export const setLogged = (logged) => ({
    type: SET_LOGGED,
    logged
})

export const setChangedFilm = (film) => ({
    type: SET_CHANGED_FILM,
    film
})

export const deleteFilm = (id) => ({
    type: DELETE_FILM,
    id
})