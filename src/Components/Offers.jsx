import React from 'react';
import '../Styles/Layouts/_offers.scss';
import exclusive_image from '../Assets/exclusive_image.png';

function Offers() {
    return (
        <div className='offers container-fluid'>
            <div className="offers__left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offers__right">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
};

export default Offers;