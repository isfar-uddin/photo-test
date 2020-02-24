
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
            console.log("imageReducer: ", action);
            let newImageList = [...state.images];
            console.log("imageReducer: imageList:", newImageList);
            newImageList.splice(action.payload,1);
            return {
                images: newImageList
            };
        default:
            return state;
    }
}