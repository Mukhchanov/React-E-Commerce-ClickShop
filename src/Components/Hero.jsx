import React from 'react';
import '../Styles/Layouts/_hero.scss';
import hero_image from '../Assets/Banners/hero_image.png';

function Hero() {
    return (
        <div className='hero container-fluid'>
            <div className="hero__left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div className="hero__left-text">
                    <p>New Collection for Everyone</p>
                </div>
                <div className="hero__left-latest-btn">
                    <button>Latest Collection</button>
                </div>
            </div>
            <div className="hero__right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
};

export default Hero;