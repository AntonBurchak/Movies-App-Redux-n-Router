import { createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './root-reducer';
import thunk from 'redux-thunk'
import callApi from './call-api';

const enableReduxDevtools = process.browser
    && process.env.NODE_ENV !== 'production'
    && window.__REDUX_DEVTOOLS_EXTENSION__;

let devTools;

if (enableReduxDevtools) {
    devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
} else {
    devTools = f => f;
}

const configureStore = (initialState = {}) => createStore(
    rootReducer,
    initialState,
    compose (
        applyMiddleware(thunk.withExtraArgument(callApi)),
        devTools
    )
) 

export default configureStore;