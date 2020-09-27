import { combineReducers } from 'redux';
import filmlistReducer from './films-reducer';
import usersReducer from './users-reducer';

const rootReducer = combineReducers({
    filmlistReducer,
    usersReducer
});

export default rootReducer;