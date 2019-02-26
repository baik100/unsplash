import React, { Component, Fragment } from 'react';
import './Main.scss'
import MainGallery from "../component/maingallery/MainGallery";

class Main extends Component {
  render() {
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
                              <label htmlFor="">
                                  <input type="search" placeholder={'Search free high-resolution photos'}
                                         className="form-control square"/>
                              </label>
                          </div>
                          <div className="recomm-words">
                              Trending searches: business, computer, nature, loveh, ouse
                          </div>
                      </div>
                  </div>
              </div>
              <MainGallery/>
          </div>
        </Fragment>
    );
  }
}

export default Main;
