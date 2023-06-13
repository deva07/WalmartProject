import React, { useState } from 'react';
import './LoginModel.css';
// import walmart from "../../assets/Image.png";
import { RxCross1 } from "react-icons/rx";
import { TbBrandFacebook } from "react-icons/tb";
import { SlSocialTwitter, SlSocialYoutube } from 'react-icons/sl';

const LoginModel = ({ isOpen, setIsOpen }) => { // Props or Destructing panne value vaa get panna

    const [email, setemail] = useState();               // Email value is Getted
    const [password, setpassword] = useState();         // Password value is Getted

    // const [SignInType, setSignInType] = useState(true);      // Customer Should Used be Login or LogOut

    // const a = document.getElementById('signin');
    // const b = document.getElementById('register');
    // const c = document.getElementById('btn');

    //    const register = () =>
    //    {
    //     a.style.Left='-400px';
    //     b.style.Left = '50px';
    //     c.style.Left = '110px';
    //    }

    //   const signin = () =>
    //    {
    //     a.Left ='50px';
    //     b.Left = '450px';
    //     c.Left = '0px';
    //    }

    return isOpen ? (
        <div className='overlay'>
            <div className='LoginModel'>
                <div className='button-box'>
                    <div id='btn'></div>
                    <button type='button' className='toggle-btn'> SignIn</button>
                    <button type='button' className='toggle-btn'> Register</button>
                </div>
                <div className='social-media'>
                    <SlSocialYoutube className='youtube' />
                    <TbBrandFacebook className='facebook' />
                    <SlSocialTwitter className='twitter' />
                </div>
                <form id='signin' className="input-group">
                    <input type="email"
                        className='input-field'
                        placeholder='Enter Email'
                        required
                        value={email}
                        onChange={(e) => setemail(e.target.value)} />
                    <input
                        type="password"
                        className='input-field'
                        placeholder='Enter Password'
                        required
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                    <input type='checkbox' className='check-box' />
                    <span className='forget'>Remember Password</span>
                    <button className='sumbit-btn'>Signin</button>
                </form>
                {/* <form id='register' className="input-group">
                 <input type="text"
                        className='input-field'
                        placeholder='Enter User Id'
                        required
                         />
                    <input type="email"
                        className='input-field'
                        placeholder='Enter Email'
                        required
                        value={email}
                        onChange={(e) => setemail(e.target.value)} />
                    <input
                        type="password"
                        className='input-field'
                        placeholder='Enter Password'
                        required
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                    <input type='checkbox' className='check-box' />
                    <span> I agree to the terms & conditions </span>
                    <button className='sumbit-btn'> Register </button>
                </form> */}
                {/* <div className='left'>
                    <div className='left-container'>
                        <p className='Login-title'>Login</p>
                        <p className='Login-des'>
                            Get access to your Orders.
                        </p>
                        <img src={walmart} alt="walmart" className='walmart'></img>
                    </div>
                </div>
                <div className='right'>
                    <input type="email" 
                    className='Login-input' 
                    placeholder='Enter Email' 
                    required 
                    value={email} 
                    onChange={(e) => setemail(e.target.value)} 
                    />
                     <input 
                     type="password" 
                     className='Login-input' 
                     placeholder='Enter Password' 
                     required 
                    value={password} 
                    onChange={(e) => setpassword(e.target.value)} 
                    />
                    <p className='termsandcon'>
                        By continuing, you agree to Walmart's{" "}
                        <span style={{ color: " blue " }}> Terms of Use </span>and
                        <span style={{ color: " blue " }}> Privacy Policy </span>
                    </p> */}
                {/* { 
                    SignInType ? 
                    (
                        <button className='Signin-btn'>Signin</button>
                    ) : 
                    (
                        <button className='Signin-btn'>Signup</button>
                    )}
                    {
                        SignInType ?
                        (
                            <p className='signin-signup' onClick={() => setSignInType(false)}>
                                New to Walmart? Create an account 
                            </p>
                        ) :
                        (
                            <p className='signin-signup' onClick={() => setSignInType(true)}>
                            Already an User? Signin to account
                        </p> */}
                {/* )
                    } */}
                {/* </div> */}
                <div className='close' onClick={() => setIsOpen(false)}>
                    <RxCross1 />
                </div>
            </div>
        </div>
    ) : (<></>)
};

export default LoginModel