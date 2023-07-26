import React from 'react';
import './Navigation.css';
import logo from '../../../image/logo-2.png';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import UserProfile from './UserProfile';
import phone from '../../../image/phone.png';
import { Button } from 'react-bootstrap';

const Navigation = () => {
    const { user, logout } = useAuth();

    const handleLogOut = () => {
        logout();
    };


    // When the user scrolls down 200px from the top of the document, slide down the navbar
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            document.getElementById("navbar").style.top = "0";
            document.getElementById("navbar").style.background = "#071c1f";
        } else {
            document.getElementById("navbar").style.top = "40px";
            document.getElementById("navbar").style.background = "transparent";
        }
    }

    function openNav() {
        document.getElementById("mySidenav").style.width = "50%";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }


    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark animated d-flex">
            <div className="container">
                <Link to="/home" className="navbar-brand"><img src={logo} alt="" /></Link>
                <img className="phone" src={phone} alt="" />
                <div className='ms-3'>
                    <h6 className='mb-0'>Get Support</h6>
                    <h6 className='mb-1'>123-456-789-10</h6>
                </div>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={() => openNav()}>&#9776;</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">

                        <NavLink to='/home' className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Home</NavLink>

                        <NavLink to="/shop" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Shop</NavLink>

                        <NavLink to="/blog/65a3ed04-759e-4772-bcdb-f371463a8a9f" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Blog</NavLink>

                        <NavLink to="/about" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"} tabIndex="-1">About</NavLink>

                        <NavLink to="/contact" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"} tabIndex="-1">Contact</NavLink>

                        {
                            user?.email ? <UserProfile /> : <Link to="/login" className="nav-item nav-link" tabIndex="-1">login</Link>
                        }


                    </div>
                </div>


                <div id="mySidenav" className="sidenav">
                    <b className="closebtn" onClick={() => closeNav()}>&times;</b>
                    {/* {
                        user?.email ? <UserProfile /> : <Link to="/login" className="nav-item nav-link" tabIndex="-1">login</Link>
                    } */}
                    <NavLink to='/home' className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Home</NavLink>

                    <NavLink to="/shop" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Shope</NavLink>

                    <NavLink to="/blog/65a3ed04-759e-4772-bcdb-f371463a8a9f" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Blog</NavLink>

                    <NavLink to="/about" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"} tabIndex="-1">About</NavLink>

                    <NavLink to="/contact" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"} tabIndex="-1">Contact</NavLink>

                    <NavLink to="/dashboard/orders" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"} tabIndex="-1">Dashboard</NavLink>

                    {
                        user?.email ? <Button onClick={handleLogOut}>Log Out</Button> : <Link to="/login" className="nav-item nav-link" tabIndex="-1">login</Link>
                    }

                </div>
            </div>
        </nav>

    );
};

export default Navigation;