import { createStore, combineReducers } from 'redux';
import housingsReducer from '../reducers/housings';

export default () => {
    const store = createStore(
        combineReducers({
            housings: housingsReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};