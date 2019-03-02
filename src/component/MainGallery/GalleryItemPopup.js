import React, {Component} from 'react';
import './GalleryItemPopup.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faPlus, faArrowDown} from '@fortawesome/free-solid-svg-icons'

const heart = <FontAwesomeIcon icon={faHeart} />
const plus = <FontAwesomeIcon icon={faPlus} />
const download = <FontAwesomeIcon icon={faArrowDown} />

class GalleryItemPopup extends Component {
    render() {

        const {
            photo,
            closeModal,
        }= this.props;

        return (
            <div className="GalleryItemPopup">
                <div className="popup-screen" onClick={() => closeModal()}></div>
                <div className="ly-inner">
                    <div className="head">
                        <div className="pop-desc">
                            <div className="item-info">
                                <a href={`${photo.user.links.html}`} target="_blank">
                                    <div className="user-img">
                                        <img src={photo.user.profile_image.small}/>
                                    </div>
                                </a>
                                <div className="user-name">
                                    {photo.user.name}
                                </div>
                            </div>
                        </div>
                        <div className="pop-info">
                            <div className="pop-collect">
                                <div className="i-favorite">
                                    <span className="heart">{heart}</span>
                                    <span className="likes-count">{photo.likes}</span>
                                </div>
                                <div className="i-collect">
                                    <span className="plus">{plus}</span>
                                    collect
                                </div>
                            </div>
                            <div className="pop-download">
                                <span className="download">{download}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GalleryItemPopup;
