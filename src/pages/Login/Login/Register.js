import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
             <h2>Please Registration</h2>
                <form onSubmit="">
                  <input type="email" name="" id="" placeholder="Entre Your Name" />
                  <br />
                  <br />
                  <input type="password" name="" id="" placeholder="Entre Your Password" />
                  <br />
                  <br />
                  <input type="password" name="" id="" placeholder=" Re-Entre Your Password" />
                  <br />
                  <input type="submit" value="submit" />
                </form>
                <p>Allready have an account ? <Link to = "/login"> Login</Link></p>
        </div>
    );
};

export default Register;