import React, { Component } from 'react';
import './style.scss';
   
class ArticleDetail extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const isMatch = this.props.match.isExact;
        this.props.onOther(isMatch);
    }

    render() {
        let title = '用CSS绘制0.5px的线';
        let time = '2018-06-17';
        let type = 'CSS';
        let width = '0.5px';
        let count = '95';

        return (
            <div className='article-detail'>
                <h3 className='blog-title'>
                    {title}
                </h3>
                <div className='blog-top'>
                    <span>Last Modified: {time}</span> 
                    <span className='spliter'></span>
                    <span>{type}</span> 
                    <span className='spliter'></span>
                    <span>{width}</span>
                    <span className='spliter'></span>
                    <span>浏览 {count}</span>
                </div>
                <div className='blog-content'>
                </div>
            </div>
        );
    }
};

export default ArticleDetail;