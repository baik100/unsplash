import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faPlus, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import './RelatedPhotos.scss';

class RelatedPhotos extends Component {
  render() {

      const {
        photo,
      } = this.props;

      return (
        <div className="RelatedPhotosItem">
            <div className="title-area">Related Photos</div>
            {/*<ul>*/}
                {/*<li className="RelatedPhotosItem">*/}
                    {/*<div className="inner">*/}
                        {/*<img src={photo.urls.small} alt=""/>*/}
                        {/*<div className="re-item-collect">*/}
                            {/*<div className="i-favorite">*/}
                                {/*<FontAwesomeIcon icon={faHeart}/>*/}
                                {/*<span className="likes-count">{photo.likes}</span>*/}
                            {/*</div>*/}
                            {/*<div className="i-collect">*/}
                                {/*<FontAwesomeIcon icon={faPlus}/>*/}
                                {/*collect*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="item-download">*/}
                            {/*<FontAwesomeIcon icon={faArrowDown}/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</li>*/}
            {/*</ul>*/}
        </div>
    );
  }
}

export default RelatedPhotos;
