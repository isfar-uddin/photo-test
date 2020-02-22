
import {UPLOAD_IMAGE, DELETE_IMAGE} from "./../actions/types";

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
        case DELETE_IMAGE:
            let newImageList = [...state.images];
            console.log("ImageReducer:DeleteImage:before: ", newImageList);
            newImageList.splice(action.index,1);
            console.log("ImageReducer:DeleteImage:after: ", newImageList);
            return {
                images: newImageList
            };
        default:
            return state;
    }
}