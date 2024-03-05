import React from 'react';
import '../Styles/Layouts/_cart.scss';
import CartItems from '../Components/CartItems';

function Cart() {
    return (
        <div className='cart'>
            <CartItems />
        </div>
    )
};

export default Cart;