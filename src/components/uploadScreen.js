import React, {Component} from 'react';
import {connect} from 'react-redux';
import {imageUpload,saveImage} from "./../actions";
import './../App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class WeatherCart extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <input type="file" onChange={this.props.imageUpload}/>
                <button onClick={()=> this.props.saveImage(this.props.image)}>Submit</button>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    image: state.imageList.image,
    images: state.imageList.images
});

const mapDispatchToProps = (dispatch) => {
    return {
        imageUpload: (e) => {
            dispatch(imageUpload(e))
        },
        saveImage: (image) => {
            dispatch(saveImage(image))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCart);