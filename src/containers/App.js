import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import NavTop from '../components/nav-top';
import BreadCrumb from '../components/bread-crumb';
import NavSide from '../components/nav-side';
import HomeBanner from '../components/home-banner';
import Footer from '../components/footer'; 
import BackTop from '../components/back-top';

import '../common/common.css';

import Home from '../containers/Home'; 
import Article from '../containers/Article';
import ArticleDetail from '../components/article-detail';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHome: false
        }

        this.onHome = this.onHome.bind(this);
        this.onOther = this.onOther.bind(this);
    }

    onHome(isHome) {
        this.setState({
            isHome:isHome
        });
    }
    onOther(isHome) {
        this.setState({
            isHome: !isHome
        })
    }

    render() {
        // const isHome = false;

        return (
            <div>
                <NavTop />   
                <div className='container'>
                    <BreadCrumb />
                </div>
                {this.state.isHome ? <HomeBanner/> : null}
                <div className='container'>
                    <div className='left'>
                        <Route exact path='/' render={(props)=>(<Home {...props} onHome={this.onHome} />)} />
                        <Route path='/home' render={(props)=>(<Home {...props} onHome={this.onHome} />)} />
                        <Route path='/article' render={(props)=>(<Article {...props} onOther={this.onOther} />)} />
                        <Route path='/article-detail' render={(props)=>(<ArticleDetail {...props} onOther={this.onOther} />)} />
                    </div>
                    <div className='nav-side'>
                        <NavSide />
                    </div>
                </div>
                <Footer />
                <BackTop />
            </div>
        );
    }
};

export default HomePage;