import React from 'react';
import { Tabs, Carousel } from 'antd'

import 'antd/dist/antd.css';
import '../assets/styles/banner.scss'

export default class banner extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        }
        return (
            <div className="banner">
                <Carousel {...settings} height="150px">
                    <div><img src="../assets/images/1.jpeg" alt=""/></div>
                    <div><img src="../assets/images/2.jpeg" alt=""/></div>
                    <div><img src="../assets/images/3.jpeg" alt=""/></div>
                    <div><img src="../assets/images/4.jpeg" alt=""/></div>
                </Carousel>
            </div>
        )
    }
}