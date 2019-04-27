import React, {Component} from 'react';
import './Collections.scss';
import CollectionsItem from './CollectionsItem';
import axios from 'axios';
import {UNSPLASH_ACCESS_KEY, UNSPLASH_BASE_URL} from "../../Config";

class Collections extends Component {

    // state = {
    //     collectList: []
    // }
    //
    // componentWillMount() {
    //     this.collectList()
    // }


    // collections() {
    //     const fecth = axios.get(UNSPLASH_BASE_URL + '/collections/curated', {
    //         headers: {
    //             Authorization: 'Client-ID ' + UNSPLASH_ACCESS_KEY
    //         }
    //     })
    //
    //     fecth.then(res => {
    //         const collectList = res.data.results;
    //         this.setState({
    //             collectList
    //         })
    //     })
    //         .catch(err => console.log(err))
    // }

    render() {
        return (
            <div className="Collections">
                <div className="container">
                    <div className="Collections-head">
                        <h1 className="Collections-title">Collections</h1>
                        <p>Explore the world through collections of beautiful photos free to use under the <span>Unsplash License.</span>
                        </p>
                    </div>
                    <div className="Collections-body">
                        <CollectionsItem/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Collections;
