import React, {Component} from 'react';
import classnames from 'classnames';
import './GalleryItemPopup.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faPlus, faArrowDown, faWindowClose} from '@fortawesome/free-solid-svg-icons'

class GalleryItemPopup extends Component {

    state = {
        zoomIn: false,
    };

    toggleZoom = () => {
        this.setState({
            zoomIn: !this.state.zoomIn,
        })
    };

    render() {
        const {
            photo,
            closeModal,
        } = this.props;

        return (
            <div className="GalleryItemPopup">
                <div className="popup-screen" onClick={() => closeModal()}></div>
                <div className="btn-close" onClick={() => closeModal()}>
                    <FontAwesomeIcon icon={faWindowClose}/>
                </div>
                <div className="ly-inner">
                    <div className="pop-head">
                        <div className="pop-desc">
                            <div className="item-info">
                                <a href={`${photo.user.links.html}`} target="_blank">
                                    <div className="user-img">
                                        <img src={photo.user.profile_image.small}/>
                                    </div>
                                </a>
                                <div className="user-name">
                                    <span className="name">{photo.user.name}</span>
                                    {
                                        photo.user.username &&
                                        <span className="last-name">@{photo.user.username}</span>
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="pop-info">
                            <div className="pop-collect">
                                <div className="i-favorite">
                                    <span className="heart">
                                        <FontAwesomeIcon icon={faHeart}/>
                                    </span>
                                    <span className="likes-count">
                                        {photo.likes}
                                    </span>
                                </div>
                                <div className="i-collect">
                                    <span className="plus">
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </span>
                                    collect
                                </div>
                            </div>
                            <div className="pop-download">
                                download
                            </div>
                        </div>
                    </div>
                    <div className="pop-body">
                        <div className="user-photo">
                            <div className={classnames("thumbnail", {zoomIn: this.state.zoomIn} )}
                                 onClick={() => this.toggleZoom()}
                            >
                                <img src={this.state.zoomIn ? photo.urls.regular : photo.urls.small} alt=""/>
                            </div>
                        </div>
                        <div className="pop-share">
                            <div className="i-share">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GalleryItemPopup;
