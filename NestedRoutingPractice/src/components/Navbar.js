import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function Navbar(){
    return <>
   
   <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/products'}>Products</NavLink></li>
            <li><NavLink to={'/categories'}>Categories</NavLink></li>
        </ul>

    </>
}