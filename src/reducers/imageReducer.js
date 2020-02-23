
import {UPLOAD_IMAGE, DELETE_IMAGE} from "./../actions/types";

const initialState = {
    images:[]
};

export default (state = initialState, action) => {
    switch (action.type){
        case UPLOAD_IMAGE:
            return{
                ...state,
                images:[...state.images,action.payload]
            };
        case DELETE_IMAGE:
            let newImageList = [...state.images];
            newImageList.splice(action.index,1);
            return {
                images: newImageList
            };
        default:
            return state;
    }
}