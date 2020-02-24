import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {fetchImage,saveImage} from './actions/index'

const persistedState = {
    imageList: fetchImage()
};

const middlewire = [thunk];

const store = createStore(
    rootReducer,
    persistedState,
    compose(
        applyMiddleware(...middlewire)
    )
);

store.subscribe(() => {
    console.log("store", store.getState().imageList.images);
    saveImage({
        images: store.getState().imageList.images
    });
});

export default store;