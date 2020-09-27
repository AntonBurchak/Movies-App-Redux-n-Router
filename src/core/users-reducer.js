import { LOGIN_USER } from './constants'
import { LOG_OUT_USER } from './constants'
import { REGISTER_USER } from './constants'
import { GET_USERS_LIST } from './constants'

const initialState = {
    isLogged: false,
    users: null
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_USER: {
            const user = action.user[0];
            let logged = false;
            if(user) {
                logged = true;
            }

            return {...state, isLogged: logged}
        }
        case LOG_OUT_USER: {
            const isLogged = false;

            return { ...state, isLogged}
        }
        case REGISTER_USER: {
            const isLogged = true;

            return { ...state, isLogged}
        }
        case GET_USERS_LIST: {
            const users = action.users;

            return { ...state, users }
        }
        default: return state;
    }
}
export default usersReducer;