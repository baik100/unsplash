import React, {Component, Fragment} from 'react';
import './Header.scss'
import Mainlogo from '../img/logo-black.svg';
import UserImg from '../img/extra-large.jpg'
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <Fragment>
                <div className="Header">
                    <div className="container">
                        <div className="nav">
                            <div className="logo">
                                <Link to='/main/main'><img src={Mainlogo}/></Link>
                            </div>
                            <div className="search-box">
                                <label htmlFor="">
                                    <input type="search" placeholder={'Search free high-resolution photos'}
                                           className="form-control round"/>
                                </label>
                            </div>
                            <div className="nav-menu">
                                <Link to='/main/main'>Home</Link>
                                <Link to='/main/main'>Collections</Link>
                                <Link to='/main/main'>Explore</Link>
                                <Link to='/main/main'><span></span></Link>
                                <div className="submit">Submit photo</div>
                                <div className="alarm"><span></span></div>
                                <div className="user-info">
                                    <img src={UserImg}/>
                                </div>
                            </div>
                        </div>
                        <div className="hashtag">
                            <ul>
                                <li className="tag-list"><span>ddddd</span></li>
                                <li className="tag-list"><span>ddddd</span></li>
                                <li className="tag-list"><span>ddddd</span></li>
                                <li className="tag-list"><span>ddddd</span></li>
                                <li className="tag-list"><span>ddddd</span></li>
                                <li className="tag-list"><span>ddddd</span></li>
                                <li className="tag-list"><span>ddddd</span></li>
                                <li className="tag-list"><span>ddddd</span></li>
                                <li className="tag-list"><span>ddddd</span></li>
                                <li className="tag-list"><span>ddddd</span></li>
                                <li className="tag-list"><span>ddddd</span></li>
                                <li className="tag-list"><span>ddddd</span></li>
                                <li className="tag-list"><span>ddddd</span></li>
                                <li className="tag-list"><span>ddddd</span></li>
                                <li className="tag-list"><span>ddddd</span></li>
                                <li className="tag-list"><span>ddddd</span></li>
                                <li className="tag-list"><span>ddddd</span></li>
                                <li className="tag-list"><span>ddddd</span></li>
                                <li className="tag-list"><span>ddddd</span></li>
                                <li className="tag-list"><span>ddddd</span></li>
                                <li className="tag-list"><span>ddddd</span></li>
                                <li className="tag-list"><span>ddddd</span></li>
                                <li className="tag-list"><span>ddddd</span></li>
                                <li className="tag-list"><span>ddddd</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Header;
