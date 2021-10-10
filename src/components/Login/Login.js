import React from 'react';
import { Link ,useLocation} from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

import useAuth from '../../hooks/useAuth';
const Login = () => {
  const {user , signinUsingGoogle} =  useAuth();
  const location = useLocation();
    return (
        <div className="login-form text-center">
         <form >
        <h2 className="text-center mb-3">Log in</h2>       
        <div className="form-group mb-3">
            <input type="text"  placeholder="Username"/> 
        </div>
        <div className="form-group mb-3">
            <input type="password"  placeholder="Password" />
        </div>
        <div className="form-group mb-3">
           <input type="password"  placeholder="Re-Enter Password" />
       </div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary ">Log in</button>
        </div>
        
             
    </form>
    <p className="text-center"> New User?<Link to="/Register"> Create an Account</Link></p>
    <p>------------- or---------------</p>
        <button className="mt-1" onClick={signinUsingGoogle}>Google Sign in</button>
        </div>
    );
};

export default Login;