import React, { useContext, useRef, useState } from 'react';
import '../Styles/Layouts/_navbar.scss';
import logo from '../Assets/Icons/logo.png';
import cart_icon from '../Assets/Icons/cart-icon.png';
import nav_dropdown from '../Assets/Icons/dropdown_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

function Navbar() {

    const [menu, setMenu] = useState('shop');
    const {getTotalcartItems} = useContext(ShopContext);

    const navRef = useRef();
    const ulRef = useRef();

    const dropdown_toggle = (e) => {
        navRef.current.classList.toggle('nav-menu-visible');
        ulRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <img src={logo} alt="logo" />
                <h2>ClickShop</h2>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} />
            <nav ref={navRef}>
                <ul ref={ulRef} className='navbar__list'>
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
                <div className="navbar__login-cart-count">{getTotalcartItems()}</div>
            </div>
        </div>
    )
};

export default Navbar;