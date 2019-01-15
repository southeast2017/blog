import React, { Component } from 'react';
import ArticleItem from '../artile-item';
import ArticleCarousel from '../article-carousel';

import './style.css';

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            status: 0,
        };
    }

    componentDidMount() {
        fetch('http://www.south11.top:80/get-articles').then(res => {
            res.json().then(data => {

                let {articles} = {...data.info};
                this.setState({
                    status: data.status,
                    articles: articles
                });
            });
        });
    }

    render() {
        const { carousel = false} = this.props;
        
        return (
            <div>
                <div className="left-content">
                    { carousel? <ArticleCarousel /> : null}
					<div className='artcile-list'>
                        {
                            this.state.articles.map(article => {
                                return (
                                    <div key={article.id}>
                                        <ArticleItem {...article} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
};

export default Article;