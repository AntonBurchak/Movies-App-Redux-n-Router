import * as constants from './constants';

const initialState = {
    currentLang: null
}

const langReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.SET_CURRENT_LANGUAGE: {
            console.log(action)
            return { ...state, currentLang: action.data };
        }
        default: return state;
    }
}

export default langReducer;