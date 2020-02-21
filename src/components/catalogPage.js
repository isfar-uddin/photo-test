import React, {Component} from 'react';
import {connect} from 'react-redux';
import {imageUpload} from "./../actions";
import './../App.css'

class CatalogPage extends Component {

    render(){
        console.log("CatalogPage: ", this.props.images.length);
        if(this.props.images.length === 0) {
            return(
                <div>No images in the local storage</div>
            )
        }
        return(
            <div>
                {this.props.images.length > 0 &&
                    this.props.images.map((image, index) => {
                        return(
                            <img src={image} key={index} width={200} height={200} />
                        )
                    })
                }
            </div>
        )
    }
}


const mapStateToProps = state => ({
    images: state.imageList.images
});

export default connect(mapStateToProps, null)(CatalogPage);