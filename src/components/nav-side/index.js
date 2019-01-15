import React, { Component } from 'react';
import './style.css';
import introPic from '../../img/portrait_bg.jpg';
import mePic from '../../img/me.jpg'

class NavSide extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='wrapper'>
                <div className='content-side'>
                    <div className='user-introduction'>
                        <img src={introPic} />
                        <div className='intro-body'>
                            <div className='intro-center'>
                                <img src={mePic} />
                                <h3>South</h3>
                                <p>处女座程序员，轻度选择困难症患者，Web领域的手艺人</p>
                            </div>
                            <div className='statistics'>
                                <span className='statistic-item'>随笔-12312</span>
                                <span className='spliter'></span>
                                <span className='statistic-item'>访问-sadfasfd</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default NavSide;