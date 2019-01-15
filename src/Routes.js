import React from 'react';
import { BrowserRouter as Router, Route, IndexRoute } from "react-router-dom";

import MyApp from './containers/App';
import Home from './containers/Home'; 
import Article from './containers/Article';

export default () => (
    <Router>
        {/* <MyApp>
            <Route exact path='/home' component={Home} name='home'/>
            <Route exact path='/' component={Home} name='home'/>
            <Route path='/article' component={Article} />
        </MyApp> */}
        <Route path='/' component={MyApp} />
    </Router>
);