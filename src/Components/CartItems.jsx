import React, { useContext } from 'react';
import '../Styles/Layouts/_cartitems.scss';
import { ShopContext } from '../Context/ShopContext';
import remove_icon from '../Assets/Icons/cart_cross_icon.png';

function CartItems() {

    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext);

    return (
        <div className='cartitems container'>
            <div className="cartitems__format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            {all_product.map((e, i) => {   
                if(cartItems[e.id] > 0) {
                    return <div key={i} className="cartitems__format cartitems__format-main">
                    <img src={e.image} className='carticon-product-icon' />
                    <p>{e.name}</p>
                    <p className='cartitems__format-price'>${e.new_price}</p>
                    <p className='cartitems__format-quantity'>{cartItems[e.id]}</p>
                    <p>${e.new_price * cartItems[e.id]}</p>
                    <img className='cartitems-remove-icon' src={remove_icon} onClick={() => {removeFromCart(e.id)}} />
                </div>
                }
                return null;
            })} 
            <div className="cartitems__down">
                <div className="cartitems__down-total">
                    <h1>cart Totals</h1>
                    <div>
                        <div className='cartitems__down-total-item'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <div className="cartitems__down-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <div className="cartitems__down-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems__promocode">
                    <p>If you have a promocode, Enter it here</p>
                    <div className='cartitems__promocode-box'>
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CartItems;