import React, { Component } from 'react';
import './Header.scss'
import {Link} from "react-router-dom";
import Mainlogo from "../img/logo-black.svg";
import UserImg from "../img/extra-large.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faEllipsisH, faSearch} from "@fortawesome/free-solid-svg-icons";

import {AxiosInstance as axios} from "axios";
import {UNSPLASH_ACCESS_KEY, UNSPLASH_BASE_URL} from "../Config";

const search = <FontAwesomeIcon icon={faSearch}/>
const ellipsis = <FontAwesomeIcon icon={faEllipsisH}/>
const bell = <FontAwesomeIcon icon={faBell}/>




class TopHeader extends Component {
  render() {
    return (
        <div className="TopHeader">
            <div className="logo">
                <Link to='/main/main'><img src={Mainlogo}/></Link>
            </div>
            <div className="search-box">
                <form action="" onSubmit={(e) => this.onSubmit(e)}>
                    <input
                        type="search"
                        className="form-control round"
                        value={this.state.searchWord}
                        onChange={(e) => this.onChange(e)}
                        placeholder={'Search free high-resolution photos'}
                    />
                    <button className="btn btn-hd-search">{search}</button>
                </form>
            </div>
            <div className="nav-menu">
                <Link to='/main/main'>Home</Link>
                <Link to='/main/main'>Collections</Link>
                <Link to='/main/main'>Explore</Link>
                <div className="ellipsis">{ellipsis}</div>
                <div className="submit">Submit photo</div>
                <div className="alarm">{bell}</div>
                <div className="user-info">
                    <img src={UserImg}/>
                </div>
            </div>
        </div>
    );
  }
}

export default TopHeader;
