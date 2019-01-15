import React, { Component } from 'react';
import './style.css';

import Img1 from '../../img/img1.jpg';
import Img2 from '../../img/img2.jpg';
import Img3 from '../../img/img3.jpg';
import Img4 from '../../img/img4.jpg';

class Banner extends Component {
    constructor(props) {
        super(props);

       
    }

    render() {
        let imgList = [Img1, Img2, Img3, Img4];

        return (
            <div className='banner-wrap'>
                <div className="banner-list">
                    {
                        imgList.map((img, index) => { 
                            let opacity = 0 == index ? 1 : 0;
                            return (
                                <div className="banner-item" key={index} style={{opacity: opacity}}>
                                    <img src={img} alt='' />
                                </div>
                            ); 
                        })
                    }
                </div>
                <div className="banner-preview" >
                    {
                        imgList.map((img, index) => {
                            return (
                                <div className="banner-preview-item" key={index}>
                                    <img src={img} data-key={index} alt=""/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
};

export default Banner;