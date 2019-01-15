import React, { Component } from 'react';

import Article from '../components/article';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const match = this.props.match.isExact;
        this.props.onHome(match);
    }

    render() {
        const data = {
            carousel: true
        }

        return(
            <div>              
                <Article {...data} />
            </div>
        );
    }
};

export default Home;