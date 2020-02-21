import {UPLOAD_IMAGE} from "./types";

export const uploadImage = (image) => dispatch => {
    console.log("Actions:Index:uploadImage: ", image);
    getBase64(image).then(base64 => {
        console.log("Actions:Index:uploadImage base64: ", base64);
        dispatch({
            type: UPLOAD_IMAGE,
            payload: base64
        })
    });
};

const getBase64 = (file) => {
    return new Promise((resolve,reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
};

export const saveImage = (imageList)  => {
    console.log("Actions:index:saveImage: ", imageList);
    try {
        const images = JSON.stringify(imageList);
        console.log("Actions:index:saveImage: ", images);
        localStorage.setItem('images', images);
    } catch (err){

    }
};

export const fetchImage = () => {
    try {
        const images = localStorage.getItem('images');
        console.log("Actions:index:fetchImage: ", images);
        if (images === null) {
            return undefined;
        }
        return JSON.parse(images);
    } catch (err) {
        return undefined;
    }
};