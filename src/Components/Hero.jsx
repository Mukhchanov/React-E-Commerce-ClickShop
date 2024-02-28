import React from 'react';
import '../Styles/Layouts/_hero.scss';
import hand_icon from '../Assets/hand_icon.png';
import hero_image from '../Assets/hero_image.png';

function Hero() {
    return (
        <div className='hero container-fluid'>
            <div className="hero__left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero__left-hand-icon">
                        <p>New</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Collection</p>
                    <p>For everyone</p>
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