import React, {Component, Fragment} from 'react';
import './Header.scss'
import Mainlogo from '../img/logo-black.svg';
import UserImg from '../img/extra-large.jpg'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faEllipsisH, faBell} from '@fortawesome/free-solid-svg-icons'

const search = <FontAwesomeIcon icon={faSearch}/>
const ellipsis = <FontAwesomeIcon icon={faEllipsisH}/>
const bell = <FontAwesomeIcon icon={faBell}/>

const navTags = [
    "Editorial",
    "Following",
    "Wallpapers",
    "Textures & Patterns",
    "Nature",
    "Current Events",
    "Architecture",
    "Business & Work",
    "Animals",
    "Travel",
    "Fashion",
    "Food & Drink",
    "Spirituality",
    "Experimental",
];

class Header extends Component {


    render() {
        return (
            <Fragment>
                <div className="Header">
                    <div className="container">
                        <div className="TopHeader">
                            <div className="logo">
                                <Link to='/main/main'><img src={Mainlogo}/></Link>
                            </div>
                            <div className="search-box">
                                <form action="" onSubmit={(e) => this.onSubmit(e)}>
                                    <input
                                        type="search"
                                        className="form-control round"
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
                        <div className="MainHeader">
                            <ul>
                                {
                                    navTags.map(tag => {
                                        return <li className="tag-list"><span>{tag}</span></li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Header;
