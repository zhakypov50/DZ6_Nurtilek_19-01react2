import React, {Component} from "react";
import {connect} from "react-redux";
import {getPhotosAction} from "../../redux/actions";
import Photos from "../../components/photos/Photos";


class PhotosPageClass extends Component {

    constructor(props) {
        super(props);
    }

    getPhotos = () => {
        this.props.getPhotosAction()
    }

    render() {
        return (
            <>
                <button onClick={this.getPhotos}>get photos</button>

                {
                    this.props.photos.slice(0, 10).map(photo => <Photos photoInfo={photo}/>)
                }
            </>
        )
    }
}

const mapDispatchToProps = {
    getPhotosAction
}

const mapStateToProps = state => {
    return {
        photos: state.photosReducer.photos
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (PhotosPageClass)