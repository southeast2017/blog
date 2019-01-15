import React, { Component } from 'react';
import './style.css';

class ArticleCarousel extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const title = '最新文章';

        return (
            <div className='list-head-carousel-wrap'>
                <div className="list-head-carousel-title">
					{title}: 
				</div>

                <div className="list-head-carousel">
					{/* {
						links.map((link, index) => (
							<p style={index === this.state.index ? {opacity: 1} : null } key={index}>
								<Link to={link.link}>{link.value}</Link>
							</p>
						))
                    } */}
                    <p>
                        第一篇新文章
                    </p>
				</div>
            </div>
        );
    }
};

export default ArticleCarousel;