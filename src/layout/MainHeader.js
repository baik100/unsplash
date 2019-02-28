import React, { Component } from 'react';
import './Header.scss'


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

class MainHeader extends Component {
  render() {
    return (
        <div className="MainHeader">
            <ul>
                {
                    navTags.map(tag => {
                        return <li className="tag-list"><span>{tag}</span></li>
                    })
                }
            </ul>
        </div>
    );
  }
}

export default MainHeader;
