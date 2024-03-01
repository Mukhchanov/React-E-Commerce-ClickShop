import React from 'react';
import '../Styles/Layouts/_footer.scss';
import logo from '../Assets/logo.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer__logo">
                <img src={logo} alt="" />
                <h2>CLickShop</h2>
            </div>
            <ul className='footer__list'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer__socials">
                <div className="footer__socials-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer__socials-container">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer__socials-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer__copyright">
                <p>Copyright @ 2024 - All Rights Reserved</p>
            </div>
        </div>
    )
};

export default Footer;