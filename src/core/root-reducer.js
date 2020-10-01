import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import filmlistReducer from './films-reducer';
import usersReducer from './users-reducer';
import regReducer from './reg-reducer';

const rootReducer = combineReducers({
    filmlistReducer,
    usersReducer,
    regReducer,
    form: formReducer,
    
});

export default rootReducer;