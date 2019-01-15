import React, { Component } from 'react';
import './style.css';

class BreadCrumb extends Component {
    constructor(props) {
        super(props);
    
    }

    render() {
        return (
            <div>
                <div className='top-bottom'>
                    <div className='list-head'>
                        <span>当前位置 : &nbsp;&nbsp;</span>
                    </div>
                    <div className='list-content'>
                        <span>绘制</span>
                    </div>
                </div>
            </div>
        );
    }

};

export default BreadCrumb;