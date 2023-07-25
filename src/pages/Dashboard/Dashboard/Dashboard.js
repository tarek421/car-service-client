import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faClockRotateLeft, faGears, faSquarePlus, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import './Dashboard.css';
import logo from '../../../image/logo-2.png';
import classes from "./Header.module.css";
import useAuth from '../../../Hooks/useAuth';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';

const Dashboard = () => {
    const { user } = useAuth();
    return (
        <div className='d-flex dashboard'>
            <div className="d-flex flex-column side-bar flex-shrink-0 p-3 text-white bg-dark">
                <Link className="mx-auto" to="/home"><img src={logo} alt="aaa" /></Link>

                <hr />
                <ul className="nav nav-pills flex-column mb-auto">


                    {user?.email ? <li>
                        <NavLink to="orders" className={(navInfo) => navInfo.isActive ? classes.active : "nav-link text-white"}>
                            <FontAwesomeIcon className='text-danger' icon={faClockRotateLeft} />
                            <span className="ms-2">Order History</span>
                        </NavLink>
                    </li> : " "}

                    {user?.email ? <li>
                        <NavLink to="productList" className={(navInfo) => navInfo.isActive ? classes.active : "nav-link text-white"}>
                            <FontAwesomeIcon className='text-danger' icon={faProductHunt} />
                            <span className="ms-2">Product List</span>
                        </NavLink>
                    </li> : " "}

                    {user.email ? <li className="nav-item">
                        <NavLink to="addService" className={(navInfo) =>
                            navInfo.isActive ? classes.active : "nav-link text-white"
                        } aria-current="page">
                            <FontAwesomeIcon className='text-danger' icon={faGears} />
                            <span className="ms-2">Add Service</span>
                        </NavLink>
                    </li> : ""}

                    {user?.email ? <li className="nav-item">
                        <NavLink to="addProduct" className={(navInfo) =>
                            navInfo.isActive ? classes.active : "nav-link text-white"
                        } aria-current="page">
                            <FontAwesomeIcon className='text-danger' icon={faSquarePlus} />
                            <span className="ms-2">Add Product</span>
                        </NavLink>
                    </li> : ""}

                    {user?.email ? <li className="nav-item">
                        <NavLink to="addBlog" className={(navInfo) =>
                            navInfo.isActive ? classes.active : "nav-link text-white"
                        } aria-current="page">
                            <FontAwesomeIcon className='text-danger' icon={faBlog} />
                            <span className="ms-2">Add Blog</span>
                        </NavLink>
                    </li> : ""}

                    {user.email ? <li className="nav-item">
                        <NavLink to="userList" className={(navInfo) =>
                            navInfo.isActive ? classes.active : "nav-link text-white"
                        } aria-current="page">
                            <FontAwesomeIcon className='text-danger' icon={faUsers} />
                            <span className="ms-2">Users list</span>
                        </NavLink>
                    </li> : ""}

                    {user?.email ? <li>
                        <NavLink to="makeAdmin" className={(navInfo) => navInfo.isActive ? classes.active : "nav-link text-white"}>
                            <FontAwesomeIcon className='text-danger' icon={faSquareCheck} />
                            <span className="ms-2">Make Admin</span>
                        </NavLink>
                    </li> : ""}

                </ul>

            </div>
            <div className='dashboard-content'>





                <Outlet />




            </div>
        </div>
    );
};

export default Dashboard;