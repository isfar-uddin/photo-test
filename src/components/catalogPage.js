import React, {Component} from 'react';
import {connect} from 'react-redux';
import {imageUpload,deleteImage} from "./../actions";
import './../App.css'

class CatalogPage extends Component {

    render(){
        if(this.props.data.length === 0) {
            return(
                <div>No images in the local storage</div>
            )
        }
        return(
            <div>
                {this.props.data.length > 0 &&
                    this.props.data.map((item, index) => {
                        return(
                            <div key={index}>
                                <img src={item.image} width={200} height={200} />
                                <div><h3>Place: <span>{item.place.value}</span></h3></div>
                                <div><h3>Date: <span>{item.date}</span></h3></div>
                                <button onClick={() => this.props.deleteImage(index)}>Delete</button>
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