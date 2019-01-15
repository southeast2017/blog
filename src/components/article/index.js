import React, { Component } from 'react';
import ArticleItem from '../artile-item';
import ArticleCarousel from '../article-carousel';

import './style.css';

class Article extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     'articles': []
        // };
        // this.state = {
        //     // 'count': this.props.count || 15,
        //     'articles': [{
        //         'id': 1,
        //         'created_at': '2018-08-25',
        //         'theme': 'CSS',
        //         'views': '71',
        //         'title': '用CSS绘制0.5px的线',
        //         'abstract': 'fklasjfklasdfjlasdjfl'
        //     },
        //     {
        //         'id': 2, 
        //         'created_at': '2018-03-25',
        //         'theme': 'CDD',
        //         'views': '22',
        //         'title': '用CSS绘制0.5px的线',
        //         'abstract': 'fklasjfklasdfjlasdjfl'
        //     },
        //     {
        //         'id': 3, 
        //         'created_at': '2018-03-25',
        //         'theme': 'CDD',
        //         'views': '22',
        //         'title': '用CSS绘制0.5px的线',
        //         'abstract': 'fklasjfklasdfjlasdjfl'
        //     }],
        //     'total': 0,
        // //     // 'current': this.props.pagination === false ? undefined : 1
        
        // }
        this.state = {
            articles: [],
            status: 0,
        };
    }

    componentDidMount() {
        fetch('http://www.south11.top:80/get-articles').then(res => {
            res.json().then(data => {
                // console.log(data);
                // this.setState({articles: data});
                let {articles} = {...data.info};
                // console.log(articles);
                this.setState({
                    status: data.status,
                    articles: articles
                });
            });
        });
    }


    render() {
        let {articles} = this.state;
        const {pagination = true, carousel = false} = this.props;
        
        return (
            <div>
                <div className="left-content">
                    { carousel? <ArticleCarousel /> : null}
					<div className='artcile-list'>
                        {
                            articles.map(article => {
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