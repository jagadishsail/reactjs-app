import React from "react";
import { Link } from "react-router-dom"
import MyForm from "../api/MyForm";
import NetflixItem from "../api/NetflixItem";
import ThemeContext from "../api/ThemeContext";
import Toolbar from "../api/Toolbar";
const Header = () => {

    return (
        <nav>
            <Link to="/">Home</Link> |
            <Link to="/about">About</Link> |
            <Link to="/contact">Contact</Link> |
            <Link to="/users">Users</Link> 
            <Link to="/context"> Context </Link>
        </nav>

    ) 

    
}

export default Header;