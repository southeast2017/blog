import React, { Component } from 'react';
import './style.css';
import bgpic from '../../img/bord.jpg';
import Banner from '../banner';

class HomeBanner extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='home-banner'>
                <div className='container'>
                    <Banner />
                    <div className="day-word">
                        <img src={bgpic} />
                        <h2>每日一语</h2>
                        <span>毕竟不是作家，写不出那么好的文章 — 因为没有丰富阅历和经验！闲下来时多看看书，书本里的故事总有我要学的人生。</span>   
                    </div>
                </div>
            </div>
        );
    }
};

export default HomeBanner;