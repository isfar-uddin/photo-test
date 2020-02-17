import {IMAGE_UPLOAD, SAVE_IMAGE} from "./types";
import Constants from './../constants'

export const imageUpload = (e) => dispatch => {
    console.log("From index:", e.target.files[0]);
    const file = e.target.files[0];
    getBase64(file).then(base64 => {
        dispatch({
            type: IMAGE_UPLOAD,
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

export const saveImage = (image) => dispatch => {
    dispatch({
        type: SAVE_IMAGE,
        payload: image
    })
};
