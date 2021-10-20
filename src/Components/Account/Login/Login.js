import React from 'react';
import './Login.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../CustomHooks/useAuth';


const Login = () => {

    const {handleGoogleSignin, handleGithubSignin} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';
    // Handle google login by taking info from useFirebase
    const handleGoogleLogin = () => {
          handleGoogleSignin()
          .then(res => {
                history.push(redirectUrl);
          })
    }
   
    // Handle github login by taking info from useFirebase
   const handleGithubLogin = () => {
       handleGithubSignin()
       .then(res => {
             history.push(redirectUrl);
       })
   }
    return (
        <div className="loginForm">
            <div className="container">
                <div className="loginFormArea m-auto">
                    {/* <div className="vectorImage img-fluid" width="400" height="300">
                        <img src="https://insights.dice.com/wp-content/uploads/2019/07/Software-Developer-Software-Engineer-Dice.png" alt="vectorImage" />
                    </div> */}
                    <div className="form">
                        <div className="mainForm"> 
                        <h2 className="formHeading">Login To SkillUp</h2>
                           <form>
                            <input type="email" className="my-3" id="inputField" placeholder="Enter your email" /> <br />
                            <input type="password" id="inputField" placeholder="Enter your password" /> <br />
                            <input type="checkbox" name="" id="" /> Remember me <br />
                            <input type="button" value="Login" />
                        </form>
                        <div className="apiIcon">
                            <h3 className="headingofApi">Continue With API</h3>
                        <span id="apiSite" className="fab fa-facebook"></span>
                        <span id="apiSite" onClick={ handleGoogleLogin }className="fab fa-google"></span>
                        <span id="apiSite" onClick={ handleGithubLogin } className="fab fa-github"></span>
                        <span id="apiSite" className="fab fa-linkedin"></span>
                        <span id="apiSite" className="fab fa-twitter"></span>
                        
                        </div>                           
                        <div className="elseAway"> 
                            <Link to="/forgotPass" className="text-decoration-none">Forgot password?</Link>
                            <span className="goSignup">Haven't an account? <Link to="/signup" className="text-decoration-none">Get started.</Link></span>
                          </div>  
                        </div>

                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Login;