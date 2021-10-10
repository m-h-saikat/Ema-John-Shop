import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css'
const Register = () => {
    return (
        <div className="login-form text-center">
        <form onSubmit="">
       <h2 className="text-center mb-3">Register</h2>       
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
           <button type="submit" className="btn btn-primary ">Register</button>
       </div>
            
   </form>
   <p className="text-center">Already Registered? <Link to="/Login"> Login</Link></p>
       </div>
    );
};

export default Register;