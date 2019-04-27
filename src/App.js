import React, {Component} from 'react';
import Main from "./main/Main";
import {Link, Route} from "react-router-dom";
import classnames from 'classnames';
import './scss/style.scss'
import Header from "./layout/Header";
import Collections from "./component/Collections/Collections";

class App extends Component {

    state = {
        count: 0,
        // pathname: ""
    }

    constructor(props) {
        super(props);

        console.log("execute constructor");
    }

    componentWillMount() {
        console.log("execute componentWillMount");
    }

    componentDidMount() {
        console.log("execute componentDidMount");
        const pathname = window.location.pathname;
        this.setState({
            count : 1,
            // pathname
        })
    }

    render() {
        console.log("execute render");
        // console.log(this.state)

        // const hasScroll = window.scrollTop > 0


        return (
            <div className="App">
                <Header/>
                <Route path="/main/main" component={Main}/>
                <Route path="/component/collections/collections" component={Collections}/>
                {/*<Link to="/" className={this.state.pathname === "/" ? "is-active" : ""}>home</Link>*/}
                {/*<Link to="/" className={classnames({isActive: this.state.pathname === "/"})}>home</Link>*/}
                {/*<Link to="/" className = { classnames( {hasScroll} ) }>home</Link>*/}

            </div>

        );
    }
}

export default App;
