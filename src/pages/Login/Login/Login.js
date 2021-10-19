import React from 'react';
import { Link } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';


const Login = () => {

 const {SignInUseGoogle} = useAuth();
    return (
        <div className="login-container">
            <h2>Please Login</h2>
                <form onSubmit="">
                  <input type="email" name="" id="" placeholder="Entre Your Name" />
                  <br />
                  <br />
                  <input type="password" name="" id="" placeholder="Entre Your Password" />
                  <br />
                  <input type="submit" value="submit" />
                 <p>Please Registration :<Link to = "/register"> Crete New Account</Link></p>
                </form>

          <div>-----------or---------------</div>

           <button onClick={SignInUseGoogle}>Google Sign In</button>
        </div>
    );
};

export default Login;