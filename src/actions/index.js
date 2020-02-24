import {UPLOAD_IMAGE,DELETE_IMAGE} from "./types";

export const uploadImage = (data) => dispatch => {

    if(!data.image || !data.date || !data.place || !data.title) {
        alert("Please select image, date, title and place all of them");
        return;
    }
    getBase64(data.image).then(base64 => {
        data.image = base64;
        dispatch({
            type: UPLOAD_IMAGE,
            payload: data
        });
        alert("Your file is being uploaded!");
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
    try {
        const images = JSON.stringify(imageList);
        localStorage.setItem('images', images);
    } catch (err){

    }
};

export const fetchImage = () => {
    try {
        const images = localStorage.getItem('images');
        if (images === null) {
            return undefined;
        }
        return JSON.parse(images);
    } catch (err) {
        return undefined;
    }
};

export const deleteImage = (index) => dispatch => {
    dispatch({
        type: DELETE_IMAGE,
        payload: index
    })
};