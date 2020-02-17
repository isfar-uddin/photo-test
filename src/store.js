import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middlewire = [thunk];
const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middlewire)
    )
);

export default store;