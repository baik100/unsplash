import React, {Component} from 'react';
import './MainGallery.scss'
import Masonry from 'react-masonry-component';
import MainGalleryItem from "./MainGalleryItem";

const masonryOptions = {
    transitionDuration: 0
};

class MainGallery extends Component {

    showModal(photo) {
        console.log('@@',photo)
        this.setState({
            photo: photo
        })

    }


    render() {

        const {
            photoList = [],
        } = this.props;

        return (
            <div className="MainGallery">

                <Masonry
                    className={'PhotoLists'} // default ''
                    elementType={'ul'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                >
                    {
                        this.props.photoList.map(photo => {
                            return (

                                <MainGalleryItem
                                    photo={photo}
                                    showModal={this.showModal}
                                />
                            )
                        })
                    }
                </Masonry>

            </div>
        );
    }
}

export default MainGallery;
