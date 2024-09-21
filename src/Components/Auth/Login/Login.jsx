import React, { useState } from 'react';
import './Login.scss'
import axios from 'axios';
import dotenv from 'dotenv';
import { decodeToken } from '../../../App';
import Cookies from 'js-cookie'


// dotenv.config();

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const loginHandler = async (e) => {
        e.preventDefault();
        const body = {
            userEmail: email,
            userPassword:password
        }

        try {
            const session = await axios.post(`http://18.209.163.121:5000/api/auth/token`, body);
            Cookies.set('authtoken', session.data, { expires: 7 });
            const token = session.data;   
        } catch (err) {
            console.log("There is Error",err);
            
        }
    }
    return (
        <>
            <div>
                 <div id="background" class="mt-5">
                <div id="shape1"></div>
                <div id="shape2"></div>
            </div>
            <form className='f_form box_shadow' onSubmit={loginHandler}>
                <h3 id="login-title">Login Here</h3>

                <label for="username">Username</label>
                <input type="email" value={email} required onChange={(e)=>setEmail(e.target.value)} placeholder="Email or Phone" id="username" />

                <label for="password">Password</label>
                    <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} placeholder="Password" id="password" />

                <button id="login-button">Log In</button>
                <div id="social-container">
                    <div id="google" class="go"><i class="fab fa-google"></i> Google</div>
                    <div id="facebook" class="fb"><i class="fab fa-facebook"></i> Facebook</div>
                </div>
            </form>
           </div>

        </>
    )
}

export default Login