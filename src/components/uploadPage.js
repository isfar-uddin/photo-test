import React, {Component} from 'react';
import {connect} from 'react-redux';
import {uploadImage} from "./../actions";
import './../App.css'

class UploadScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: null
        }
    }

    onChangeImage = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    };

    render(){
        return(
            <div>
                <input type="file" onChange={this.onChangeImage}/>
                <button onClick={()=> this.props.uploadImage(this.state.image)}>Submit</button>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        uploadImage: (e) => {
            console.log("UploadPage: Button clicked");
            dispatch(uploadImage(e))
        }
    }
};

export default connect(null, mapDispatchToProps)(UploadScreen);