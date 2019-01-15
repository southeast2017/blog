import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './style.css';

class NavTop extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const links = [
            {key: "home", text: '主页'},
            {key: "article", text: '文章'},
            {key: "timeline", text: '归档'},
            {key: "gather", text: '点滴'},
            {key: "gossip", text: '慢生活'}
        ];
        const content = (
            <div>
                <ul>
                    {
                        links.map((item) => (
                            <li className='navbar-item' key={item.key}>
                                <Link to={'/'+item.key}>{item.text}</Link>
                            </li>
                        ))
                    }
                    <form>
                        <input type="text" placeholder='Search' />
                        <input type="submit" />
                    </form>
                </ul>
            </div>
        );
        return (
            <div className='nav-top-wrap'>
                <div className='container'>
                    <div className='site-logo'>
                        <h2>
                            <span>So</span>
                            <span>uth</span>
                        </h2>
                        <p>从入门到放弃</p>
                    </div>
                </div>
                <div className='navbar-collapse-body'>
                    <div className='container'>
                        {content}
                    </div>
                </div>
            </div>
        )
    }
};

export default NavTop;