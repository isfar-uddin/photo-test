import React, {Component} from 'react';
import {connect} from 'react-redux';
import {imageUpload,deleteImage} from "./../actions";
import './../App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class CatalogPage extends Component {

    render(){
        if(this.props.data.length === 0) {
            return(
                <div className="container no-image">No images uploaded yet</div>
            )
        }
        return(
            <div>
                {this.props.data.length > 0 &&
                    this.props.data.map((item, index) => {
                        return(
                            <div key={index} className="image-container">
                                <img src={item.image} width={200} height={200} />
                                <FontAwesomeIcon className="close-btn" icon={faTimes} onClick={() => this.props.deleteImage(index)}/>
                                <h3>Title: <span>{item.title}</span></h3>
                                <h3>Place: <span>{item.place.value}</span></h3>
                                <h3>Date: <span>{item.date}</span></h3>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


const mapStateToProps = state => ({
    data: state.imageList.images
});

const mapDispatchToProps = dispatch => {
    return ({
        deleteImage: (index) => {
            dispatch(deleteImage(index))
        }
    });
};


export default connect(mapStateToProps, mapDispatchToProps)(CatalogPage);