import React, {Component, Fragment} from 'react';
import './MainGallery.scss'
import axios from 'axios';
import {UNSPLASH_ACCESS_KEY, UNSPLASH_BASE_URL} from "../../Config";

class MainGallery extends Component {

    state = {
        photoList: [],
    };


    componentWillMount() {

        this.getPhotoLists();
    };


    getPhotoLists(param) {
        const fetch = axios.get(`${UNSPLASH_BASE_URL}/photos`, {
            headers: {
                Authorization: 'Client-ID ' + UNSPLASH_ACCESS_KEY
            }
        });

        fetch.then(res => {
            const photoList = res.data;
            this.setState({
                photoList: photoList
            });
            console.log('@@photoList', res.data);
        })

            .catch(err => console.log(err))
    };

    render() {

        return (
            <Fragment>
                <div className="main-gallery">
                    <ul>
                        {
                            this.state.photoList.map(photo => {
                                return <li>
                                    <img src={photo.urls.regular}/>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default MainGallery;
