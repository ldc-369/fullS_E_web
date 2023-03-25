import React from 'react';
import './banner.scss';
import bannerImg from '../../../assets/banner-img.png';



function Banner(props) {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        Do dolore non id id anim anim aliquip irure. In ex in exercitation .
                        Officia nulla et exercitation .
                        In est deserunt.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read more</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>

                <img className="banner-img" src={bannerImg} alt="" />
            </div>
        </div>
    );
}

export default Banner;