'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search1.css';
// import './search2.less';
import logo from './images/logo.png'
class Search extends React.Component {

    render() {
        return <div className="search-text">
            <img src={logo}></img>
            搜索文字的内容
        </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);