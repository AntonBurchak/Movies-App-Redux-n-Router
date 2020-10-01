import * as constants from './constants';

const initialState = {
    name: null,
    age: null
};

const regReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.LOGIN: {
            alert(`Login...`);
            console.log(action.data);
            return { ...state, name: action.data.firstName, age: action.data.age };
        }
        default:
            return state;
    }
}

export default regReducer;