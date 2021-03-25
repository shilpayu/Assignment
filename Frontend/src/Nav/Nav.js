import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color:'black',
        padding:'10px'
    };
    return (
        <div className="nav-container">
            <NavLink style={navStyle} activeClassName="active" exact to="/home">Home</NavLink>
            <NavLink style={navStyle} activeClassName="active" to="/login">Login</NavLink>
            <NavLink style={navStyle} activeClassName="active" to="/register">Register</NavLink>
        </div>
    );
}
export default Nav;