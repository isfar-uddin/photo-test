
import {IMAGE_UPLOAD,SAVE_IMAGE} from "./../actions/types";

const initialState = {
    image:{},
    images:[]
};

export default (state = initialState, action) => {
    switch (action.type){
        case IMAGE_UPLOAD:
            return{
                ...state,
                image:action.payload
            };
        case SAVE_IMAGE:
            return{
                ...state,
                images:[...state.images,action.payload]
            };
        default:
            return state;
    }
}