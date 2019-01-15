import React, { Component } from 'react';
import ArticlePage from '../components/article';

class Article extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const isMatch = this.props.match.isExact;
        this.props.onOther(isMatch);
    }

    render() {
        const isMatch = this.props.match.isExact;
        const data = {
            carousel: !isMatch
        } 

        return (
            <div>
                <div className="left-content">
					<ArticlePage {...data} />
                </div>
            </div>
        );
    }
};

export default Article;