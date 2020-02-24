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
            selectedDate: new Date(),
            title: null
        }
    }

    onChange = (val, name) => {

        if(name === 'image') {
            this.setState({
                [name]:val.target.files[0]
            })
        }else if(name === 'title'){
            this.setState({
                [name]:val.target.value
            })
        }else {
            this.setState({
                [name]:val
            })
        }

    };



    render(){
        const options = Constants.options;
        const defaultOption = options[0];
        return(
            <div className="container">
                <div className="input-container">
                    <input type="file" className="input-file" onChange={(val) => this.onChange(val,'image')}/>
                </div>

                <input type="text" className="input-text" placeholder="Add your title" onChange={(val)=>this.onChange(val,'title')}/>

                <div className="place-date-container">
                    <Dropdown className="drop-down" options={options} onChange={(val)=>this.onChange(val,'selectedPlace')} value={this.state.selectedPlace} placeholder="Select photo place" />
                    <DatePicker
                        className="input-date"
                        selected={this.state.selectedDate}
                        onChange={(val) => this.onChange(val,'selectedDate')}
                    />
                </div>

                <button className="submit-btn" onClick={()=> this.props.uploadImage({
                    image:this.state.image,
                    title:this.state.title,
                    place:this.state.selectedPlace,
                    date:this.state.selectedDate
                })}>
                    Submit
                </button>
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