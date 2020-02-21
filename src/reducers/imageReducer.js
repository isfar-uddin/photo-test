
import {UPLOAD_IMAGE} from "./../actions/types";

const initialState = {
    images:[]
};

export default (state = initialState, action) => {
    console.log("ImageReducer: ", state,action);
    switch (action.type){
        case UPLOAD_IMAGE:
            return{
                ...state,
                images:[...state.images,action.payload]
            };
        default:
            return state;
    }
}