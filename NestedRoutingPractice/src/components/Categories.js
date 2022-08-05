import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Categories(){
    return <>
    <h1>Categories</h1>
<ul>
    <li><NavLink to={'kids'}>Kids</NavLink></li>
    
    <li><NavLink to={'women'}>Women</NavLink></li>
    
    <li><NavLink to={'men'}>Men</NavLink></li>
</ul>
<Outlet></Outlet>
    </>
}