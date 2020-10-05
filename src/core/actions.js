import * as constants from './constants';

export const getFilmsList = (payload) => ({
    type: constants.GET_FILMS_LIST,
    payload
})

export const setFilmsList = (payload) => ({
    type: constants.SET_FILMS_LIST,
    payload
})

export const searchByText = (payload) => ({
    type: constants.SEARCH_BY_TEXT,
    text: payload
})

export const sortBy = (payload) => ({
    type: constants.SORT_BY,
    property: payload
})

export const resetSorting = () => ({
    type: constants.RESET_SORTING
})

export const setLikedFilm = (payload) => ({
    type: constants.SET_LIKED_FILM,
    id: payload
})

export const setDislikedFilm = (payload) => ({
    type: constants.SET_DISLIKED_FILM,
    id: payload
})

export const setStarsOnFilm = (id, stars) => ({
    type: constants.SET_STARS_ON_FILM,
    id,
    stars
})

export const generateHash = () => ({
    type: constants.GENERATE_HASH
})

export const insertFilmInfo = (film) => ({
    type: constants.INSERT_FILM_INFO,
    film
})

export const setChangedFilm = (film) => ({
    type: constants.SET_CHANGED_FILM,
    film
})

export const deleteFilm = (id) => ({
    type: constants.DELETE_FILM,
    id
})

export const filmsListLoaded = (payload) => ({
    type: constants.FILMS_LIST_LOADED,
    payload
})

export const actorsListLoaded = (payload) => ({
    type: constants.ACTORS_LIST_LOADED,
    payload
})

export const setLoginUser = (user) => ({
    type: constants.LOGIN_USER,
    user
})

export const setRegisterUser = (user) => ({
    type: constants.REGISTER_USER,
    user
})

export const logOutUser = () => ({
    type: constants.LOG_OUT_USER,
})

export const getUsersList = (users) => ({
    type: constants.GET_USERS_LIST,
    users
})

export const resetFilmInfo = () => ({
    type: constants.RESET_FILM_INFO
})

export const setCurrentLanguage = (data, lang) => ({
    type: constants.SET_CURRENT_LANGUAGE,
    data,
    lang
})

export const fetchFilmsList = () => (dispatch, getState, callApi) => {
    callApi('movies').then(response => {
        dispatch(filmsListLoaded(response.data));
    })
}

export const fetchActorsList = () => (dispatch, getState, callApi) => {
    callApi('actors').then(response => {
        dispatch(actorsListLoaded(response.data));
    })
}

export const fetchUsersList = () => (dispatch, getState, callApi) => {
    callApi('users').then(response => {
        dispatch(getUsersList(response.data));
    })
}

export const loginUser = (login, password) => (dispatch, getState, callApi) => {
    callApi(`users?name=${login}&password=${password}`).then(response => {
        dispatch(setLoginUser(response.data));
    })
}

export const registerUser = (user) => (dispatch, getState, callApi) => {
    callApi('users', 'post', user).then(response => {
        dispatch(setRegisterUser(response.data));
        dispatch(fetchUsersList())
    })
}

export const fetchFilmInfo = (id) => (dispatch, getState, callApi) => {
    callApi(`movies/${id}`).then(response => {
        dispatch(insertFilmInfo(response.data));
    })
}

export const updateFilmInfo = (id, data) => (dispatch, getState, callApi) => {
    callApi(`movies/${id}`, 'put', data).then(response => {
        dispatch(insertFilmInfo(response.data));
        dispatch(fetchFilmsList());
    })
}

export const fetchLanguages = (lang) => (dispatch, getState, callApi) => { // ua, en, ru, sp etc...
    callApi(`langs/`).then(response => {
        dispatch(setCurrentLanguage(response.data, lang));
    });
}

export const login = (data) => ({
    type: constants.LOGIN,
    data
})
