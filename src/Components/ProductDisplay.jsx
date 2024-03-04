import React from 'react';
import '../Styles/Layouts/_productdisplay.scss';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';

function ProductDisplay(props) {

    const {product} = props;

    return (
        <div className='productdisplay'>
            <div className="productdisplay__left">
                <div className="productdisplay__left-img-list">
                    <img src={product.image} />
                    <img src={product.image} />
                    <img src={product.image} />
                    <img src={product.image} />
                </div>
                <div className="productdisplay__left-img">
                    <img className='productdisplay__left-mainimg' src={product.image} />
                </div>
            </div>
            <div className="productdisplay__right">
                <h1>{product.name}</h1>
                <div className="productdisplay__right-stars">
                    <img src={star_icon} />
                    <img src={star_icon} />
                    <img src={star_icon} />
                    <img src={star_icon} />
                    <img src={star_dull_icon} />
                    <p>(122)</p>
                </div>
                <div className="productdisplay__right-price">
                    <div className="productdisplay__right-price-old">${product.old_price}</div>
                    <div className="productdisplay__right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay__right-description">
                    Explore our collection of men's shirts, featuring timeless classics and modern styles, tailored for comfort and versatility in every occasion
                </div>
                <div className="productdisplay__right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay__right-size-list">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                    <button>ADD TO CART</button>
                    <p className='productdisplay__right-category'>
                        <span>Category:</span>
                        Women, T-Shirt, Crop Top
                    </p>
                    <p className='productdisplay__right-category'>
                        <span>Tags:</span>
                        Modern, Latest, Crop Top
                    </p>
                </div>
            </div>
        </div>
    )
};

export default ProductDisplay;