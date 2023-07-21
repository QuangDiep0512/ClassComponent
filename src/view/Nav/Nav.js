import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss'
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav" >
                <NavLink to="/" activeclassname="active" exact>Home</NavLink>
                <NavLink to="/todo" >Todo</NavLink>
                <NavLink to="/about" >About</NavLink>
                <NavLink to="/user" >Users</NavLink>
            </div >
        )
    }
}

export default Nav