import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {uploadImage} from "./../actions";
import './../App.css'
import Constants from './../constants';

class UploadScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: null,
            selectedPlace: null,
            selectedDate: new Date()
        }
    }

    onChangeImage = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    };

    onSelectPlace = (option) => {
        this.setState({
            selectedPlace: option
        })
    };

    onSelectDate = (date) => {
        this.setState({
            selectedDate: date
        });
    };



    render(){
        const options = Constants.options;
        const defaultOption = options[0];
        return(
            <div>
                <input type="file" onChange={this.onChangeImage}/>
                <button onClick={()=> this.props.uploadImage({
                    image:this.state.image,
                    place:this.state.selectedPlace,
                    date:this.state.selectedDate
                })}>
                    Submit
                </button>
                <Dropdown options={options} onChange={this.onSelectPlace} value={this.state.selectedPlace} placeholder="Select photo place" />
                <DatePicker
                    selected={this.state.selectedDate}
                    onChange={this.onSelectDate}
                />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        uploadImage: (e) => {
            dispatch(uploadImage(e))
        }
    }
};

export default connect(null, mapDispatchToProps)(UploadScreen);