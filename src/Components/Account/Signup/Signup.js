import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../CustomHooks/useAuth';
import './Signup.css';

const Signup = () => {
     
    const {handleSubmit, handleEmail, handlePassword} = useAuth();
    
    return (
        <div className="loginForm">
        <div className="container">
            <div className="loginFormArea m-auto">
                <div className="form">
                    <div className="mainForm">
                    <h2 className="formHeading">Create New Account</h2>
                       <form onSubmit={handleSubmit}>
                        {/* <input type="text" id="inputField" placeholder="Enter your user name" /> <br /> */}
                        <input onBlur={ handleEmail } type="email" id="inputField" placeholder="Enter your email" /> <br />
                        <input onBlur={ handlePassword } type="password" className="my-3" id="inputField" placeholder="Enter your password" /> <br />
                        {/* <input type="password" className="my-2" id="inputField" placeholder="Re-enter your password" /> <br /> */}
                        <input type="checkbox" name="" id="" /> Agree with terms and condition <br />
                        <input type="button" value="Signup" />
                    </form>
                    {/* <div className="apiIcon">
                        <h3 className="headingofApi">Signup With API</h3>
                    <span id="apiSite" className="fab fa-facebook"></span>
                    <span id="apiSite" className="fab fa-google"></span>
                    <span id="apiSite" className="fab fa-github"></span>
                    <span id="apiSite" className="fab fa-linkedin"></span>
                    <span id="apiSite" className="fab fa-twitter"></span>
                    </div>                        */}
                    <div className="elseAway"> 
                        <span className="goSignup">Already have an account? <Link to="/account" className="text-decoration-none">Login</Link></span>
                      </div>  
                    </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;