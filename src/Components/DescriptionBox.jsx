import React from 'react';
import '../Styles/Layouts/_descriptionbox.scss';

function DescriptionBox() {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox__nav">
                <div className="descriptionbox__nav-box">Description</div>
                <div className="descriptionbox__nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox__description">
                <p>Step into the world of fashion with our vibrant e-commerce platform. Browse through our curated collection of trendy apparel, from chic dresses to cozy knitwear. With easy navigation and secure transactions, shopping for clothes online has never been more convenient. Experience style at your fingertips today!</p>
                <p>Revamp your wardrobe effortlessly with our online clothing store. Discover the latest fashion trends, from casual wear to formal attire, all at your fingertips. Shop now for style delivered straight to your door.</p>
            </div>
        </div>
    )
};

export default DescriptionBox;