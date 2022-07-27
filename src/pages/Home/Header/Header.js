import React from 'react';
import '../../../css/home.css';
import car from '../../../image/header-car.png';
import Navigation from '../../Shared/Navigation/Navigation';
import HeaderTop from '../HeaderTop/HeaderTop';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id="header" className="text-center">
            <HeaderTop />
            <hr />
            <Navigation />
            <div className="container">
                <div className="header-content">
                    <h6>ANY KIND OF CAR YOU WILL GET</h6>
                    <h1>Professional Car 
                        Service Provide</h1>
                    <div className="button-group">
                        <a href="#core-features"><button className="btn first">our service</button></a>
                        <Link to="/about"><button className="btn second">learn more</button></Link>
                    </div>

                </div>
                <div className="image">
                    <img src={car} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;