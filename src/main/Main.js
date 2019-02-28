import React, { Component, Fragment } from 'react';
import './Main.scss'
import MainGallery from "../component/MainGallery/MainGallery";
import axios from "axios";
import {UNSPLASH_ACCESS_KEY, UNSPLASH_BASE_URL} from "../Config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const search = <FontAwesomeIcon icon={faSearch} />



class Main extends Component {

    state = {
        searchWord: "",
        photoList: []
    };

    componentWillMount() {

        this.searchPhotos('first' ,'1');
    };

    searchPhotos(query, page) {

        const fetch = axios.get(`${UNSPLASH_BASE_URL}/search/photos?page=${page}&query=${query}`, {
            headers: {
                Authorization: 'Client-ID ' + UNSPLASH_ACCESS_KEY
            }
        });

        fetch.then(res => {
            const photoList = res.data.results;
            this.setState({
                photoList
            });
        })

            .catch(err => console.log(err))
    };

    onChange = (e) => {

        this.setState({
            searchWord: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.searchPhotos(this.state.searchWord);
        this.setState({searchWord:""})
    };



    render() {
      console.log (this.state.searchWord);
    return (
        <Fragment>
          <div className="Main">
              <div className="visual top-padding">
                  <div className="container">
                      <div className="visual-txt">
                          <h3>Unsplash</h3>
                          <p>Beautiful, free photos.</p>
                          <p>Gifted by the world’s most generous community of photographers. 🎁</p>
                          <div className="search-box">
                              <form action="" onSubmit={(e) => this.handleSubmit(e)}>
                                  <input
                                      type="search"
                                      className="form-control square"
                                      value={this.state.searchWord}
                                      onChange={(e) => this.onChange(e)}
                                      placeholder={'Search free high-resolution photos'}
                                  />
                                  <button className="btn btn-vs-search">{search}</button>
                              </form>
                          </div>
                          <div className="recomm-words">
                              Trending searches: business, computer, nature, loveh, ouse
                          </div>
                      </div>
                  </div>
              </div>

              <div className="container-m-gallery">
                  <MainGallery
                      photoList = {this.state.photoList}
                  />
              </div>

          </div>
        </Fragment>
    );
  }
}

export default Main;
