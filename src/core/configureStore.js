import { createStore } from 'redux'
import rootReducer from './root-reducer';


let devTools = f => f;

const enableReduxDevtools = process.browser
    && process.env.NODE_ENV !== 'production'
    && window.__REDUX_DEVTOOLS_EXTENSION__;


if (enableReduxDevtools) {
    devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}    


export const configureStore = (initialState = {}) => createStore(
    rootReducer,
    initialState,
    devTools
) 