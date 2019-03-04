import React, {Component} from 'react';
import './MainGallery.scss'
import Masonry from 'react-masonry-component';
import MainGalleryItem from "./MainGalleryItem";
import GalleryItemPopup from "./GalleryItemPopup";

const masonryOptions = {
    transitionDuration: 0
};

class MainGallery extends Component {

    state = {
        photoList: [],
        currentPage: 1,
        query : 'photo',
        photo : undefined,
    };

    showModal = (photo) => {
        this.setState({
            photo
        })
    }


    closeModal = () => {
        this.setState({
            photo: undefined
        })
    };


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
                        photoList.map((photo, index) => {
                            console.log(photo);
                            return (
                                <MainGalleryItem
                                    key={index}
                                    photo={photo}
                                    showModal={this.showModal}
                                />
                            )
                        })
                    }
                </Masonry>

                {
                    this.state.photo &&
                    <GalleryItemPopup
                        photo={this.state.photo}
                        closeModal={this.closeModal}
                    />
                }

            </div>
        );
    }
}

export default MainGallery;
