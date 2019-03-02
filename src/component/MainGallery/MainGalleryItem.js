import React, {Component} from 'react';
import './MainGalleryItem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faPlus, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import GalleryItemPopup from "./GalleryItemPopup";

const heart = <FontAwesomeIcon icon={faHeart} />
const plus = <FontAwesomeIcon icon={faPlus} />
const download = <FontAwesomeIcon icon={faArrowDown} />

class MainGalleryItem extends Component {

    render() {

        const {
            photo,
            showModal,
        } = this.props;

        return (

            <li className="MainGalleryItem" onClick={() => showModal(photo)}>
                <div className="inner">
                    <img src={photo.urls.regular} className="thumb"/>
                    <div className="desc">
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
                    <div className="item-collect">
                        <div className="i-favorite">
                            <span className="heart">{heart}</span>
                            <span className="likes-count">{photo.likes}</span>
                        </div>
                        <div className="i-collect">
                            <span className="plus">{plus}</span>
                            collect
                        </div>
                    </div>
                    <div className="item-download">
                        <span className="download">{download}</span>
                    </div>
                </div>
            </li>
        )

    }
}

export default MainGalleryItem;
