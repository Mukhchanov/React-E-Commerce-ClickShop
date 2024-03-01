import React, { useState } from 'react';
import '../Styles/Layouts/_navbar.scss';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart-icon.png';
import { Link } from 'react-router-dom';

function Navbar() {

    const [menu, setMenu] = useState('shop');

    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <img src={logo} alt="logo" />
                <h2>ClickShop</h2>
            </div>
            <nav>
                <ul className='navbar__list'>
                    <li onClick={() => {setMenu('shop')}}>
                        <Link to='/'>Shop</Link>{menu === 'shop' ? <hr/> : <></> }
                    </li>
                    <li onClick={() => {setMenu('mens')}}>
                        <Link to='/mens'>Men</Link> {menu === 'mens' ? <hr/> : <></> }
                    </li>
                    <li onClick={() => {setMenu('womens')}}>
                        <Link to='/womens'>Women</Link> {menu === 'womens' ? <hr/> : <></> }
                    </li>
                    <li onClick={() => {setMenu('kids')}}>
                        <Link to='/kids'>Kids</Link> {menu === 'kids' ? <hr/> : <></> }
                    </li>
                </ul>
            </nav>
            <div className='navbar__login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="cart icon"/></Link>
                <div className="navbar__login-cart-count">0</div>
            </div>
        </div>
    )
};

export default Navbar;