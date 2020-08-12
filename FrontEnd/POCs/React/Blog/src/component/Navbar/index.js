import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css";

const Navbar = (props) => {

    const[search,setSearch]=useState(false);

    const submitSearch = (e) => {
        e.preventDefault();
        alert("Searched");
    }

    const openSearch = () => {
        setSearch(true);
    }

    const searchClass=search?'searchInput active':'searchInput';


    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/aboutus">About Us</NavLink></li>
                <li><NavLink to="/post">Posts</NavLink></li>
                <li><NavLink to="/contactus">Contact Us</NavLink></li>
            </ul>
            <div className="search">
            <form onSubmit={submitSearch}>
            <input type="text" className={searchClass} placeholder="Search" />
            <img onClick={openSearch} className="searchicon" src={require('../../assets/icon.png')} alt="Search" />
            </form>
        </div>
        </div>
       
    )
}
export default Navbar;