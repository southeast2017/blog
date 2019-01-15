import React, { Component } from 'react';
import './style.scss';
   
class ArticleDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: "",
            tag: "",
            theme: "",
            created_at: "",
            width: '0.5px',
            views: ''
        }

    }

    componentDidMount() {
        const isMatch = this.props.match.isExact;
        this.props.onOther(isMatch);

        let {id} = {...this.props.match.params};

        fetch(`http://www.south11.top:80/get-article-detail/${id}`).then(res => {
            res.json().then(data => {

                let { status, title, body, tag, theme, created_at, views } = {...data._info};
                this.setState({
                    status: status,
                    title: title,
                    body: body,
                    tag: tag,
                    theme: theme,
                    created_at: created_at,
                    views: views
                });
            });
        });
    }

    render() {

        return (
            <div className='article-detail'>
                <h3 className='blog-title'>
                    {this.state.title}
                </h3>
                <div className='blog-top'>
                    <span>Last Modified: {this.state.created_at}</span>
                    <span className='spliter'> </span>
                    <span>{this.state.tag}</span>
                    <span className='spliter'> </span>
                    <span>{this.state.width}</span>
                    <span className='spliter'> </span>
                    <span>浏览 {this.state.views}</span>
                </div>
                <div className='blog-content'
                    dangerouslySetInnerHTML={{__html: this.state.body}}
                >
                </div>
            </div>
        );
    }
};

export default ArticleDetail;