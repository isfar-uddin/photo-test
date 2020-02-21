import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {fetchImage,saveImage} from './actions/index'

const persistedState = {
    imageList: fetchImage()
};

console.log("store:PersistedState: ", persistedState);

const middlewire = [thunk];

const store = createStore(
    rootReducer,
    persistedState,
    compose(
        applyMiddleware(...middlewire)
    )
);

store.subscribe(() => {
    console.log("Store: ", store.getState());
    saveImage({
        images: store.getState().imageList.images
    });
});

export default store;