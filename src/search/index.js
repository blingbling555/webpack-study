'use strict';
if(module.hot)
{
    module.hot.accept();
}
import React from 'react';
import ReactDOM from 'react-dom';
import './search1.css';
import './search2.less';
import logo from '../images/logo.png'
import {testCommon} from "../common/testCommon";
console.log(testCommon())
class Search extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            Text: null
        }
    }
    loadComponent() {
        import('./text.js').then(Text => {
            this.setState({
                Text: Text.default
            })
        })
    }
    render() {
        const { Text } = this.state;
        return <div className="search-text">
            {
                Text ? <Text /> : null
            }
            <img src={logo} onClick={this.loadComponent.bind(this)}></img>
            搜索文字的内容cadxs asd
        </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);