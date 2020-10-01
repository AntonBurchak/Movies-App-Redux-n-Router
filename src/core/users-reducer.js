import * as constants from './constants'

const initialState = {
    isLogged: true,
    users: null
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.LOGIN_USER: {
            const user = action.user[0];
            let logged = false;
            if(user) {
                logged = true;
            }

            return {...state, isLogged: logged}
        }
        case constants.LOG_OUT_USER: {
            const isLogged = false;

            return { ...state, isLogged}
        }
        case constants.REGISTER_USER: {
            const isLogged = true;

            return { ...state, isLogged}
        }
        case constants.GET_USERS_LIST: {
            const users = action.users;

            return { ...state, users }
        }
        default: return state;
    }
}

export default usersReducer;