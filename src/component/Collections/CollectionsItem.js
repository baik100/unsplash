import React, {Component, Fragment} from 'react';
import './Collections.scss'

class CollectionsItem extends Component {
    render() {
        return (
            <Fragment>
                <div className="CollectionsItem">
                    <div className="CollectionsThumbnail">
                        <ul>
                            <li className="thumbnail">
                                <img src="https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7?ixlib=rb-1.2.1&dpr=2&auto=format&fit=crop&w=525&q=60" alt=""/>
                            </li>
                            <li className="thumbnail">
                                <img src="https://images.unsplash.com/photo-1506269996138-4c6d92fbd8a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=60" alt=""/>
                                <img src="https://images.unsplash.com/photo-1506269996138-4c6d92fbd8a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=60" alt=""/>
                            </li>
                        </ul>
                    </div>
                    <div className="CollectionsSubject">
                        Patterns and Textures
                    </div>
                    <div className="CollectionsDesc">
                        356 photos · Curated by Chloe Urban
                    </div>
                    <div className="CollectionsTags">
                        <span className="tag">Texture</span>
                        <span className="tag">Pattern</span>
                        <span className="tag">Blue</span>
                    </div>
                </div>
            </Fragment>


        );
    }
}

export default CollectionsItem;
