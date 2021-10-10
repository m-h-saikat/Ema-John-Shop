import React from "react";
import { NavLink } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import logo from "../../images/logo.png";
import "./Header.css";
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { user ,logOut} = useAuth();
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/review">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory</NavLink>
       {user.email && <span className="me-2" style={{color:'white'}}>{user.displayName}</span>}
        {user.email ? (
          <button onClick={logOut}>LogOut </button>
        ) : (
          <NavLink to="/Login">Login</NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
