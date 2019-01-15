import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class ArticleItem extends Component {

    render() {
        const {created_at, theme, views, title, abstract, id} = this.props;

        return (
            <div className="article-item wow zoomIn animated">
                <div className="article-body">
                    <Link to={`/article-detail/${id}`}><h4>{title}</h4></Link>
                    <p>
						<span>post @ {created_at}</span>
						&nbsp;&nbsp;&nbsp;
						<span>category: {theme}</span>
						&nbsp;&nbsp;&nbsp;
						<span>浏览: {views}</span>
					</p>
					<div className="article-abstract">
						{abstract}
					</div>
					<span className="article-link"><Link to={`/article-detail/${id}`}>阅读全文 >></Link></span>
                </div>
            </div>
        );
    }
};

export default ArticleItem;