import React, { Component } from 'react';

import Article from '../components/article';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            carousel: true
        }
    }
    componentDidMount() {
        const match = this.props.match.isExact;
        this.props.onHome(match);
    }

    render() {

        return(
            <div>              
                <Article {...this.state} />
            </div>
        );
    }
};

export default Home;