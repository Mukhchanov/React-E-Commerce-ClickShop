import React from 'react';
import '../Styles/Layouts/_loginsignup.scss';

function LoginSignup() {
    return (
        <div className='loginsignup'>
            <div className="loginsignup__container">
                <h1>Sign Up</h1>
                <div className="loginsignup__container-fields">
                    <input type="text" placeholder='Your Name' required/>
                    <input type="email" placeholder='Your Email Address' required/>
                    <input type="password" placeholder='Password' required/>
                </div>
                <button>Continue</button>
                <p className='loginsignup__login'>Already have an account? <span>Login here</span></p>
                <div className='loginsignup__agree'>
                    <input type="checkbox" name="" id=""/>
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
};

export default LoginSignup;