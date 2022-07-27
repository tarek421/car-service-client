import React from 'react';
import { faFacebook, faGooglePlus, faInstagram, faTwitter, faVimeo } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
// import logo from '../../../image/logo-2.png';
import { Link } from 'react-router-dom';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
   return (
      <div id="footer" className="">
         <div className="container">
            <div className="row">
               <div className="col-md-6 col-lg-4 col-sm-12">
                  <div className="about-us">
                     <h4>About Us.</h4>
                     <div className="about-content">
                        <p>Corporate clients and leisure travelers has been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across World. Indeed, it has been more than one decade and five years that Groundlink</p>
                     </div>
                  </div>
                  <div className="social-bar">
                     <ul className='social-icon d-flex'>
                        <li><FontAwesomeIcon icon={faFacebook} /></li>
                        <li><FontAwesomeIcon icon={faTwitter} /></li>
                        <li><FontAwesomeIcon icon={faInstagram} /></li>
                        <li><FontAwesomeIcon icon={faVimeo} /></li>
                        <li><FontAwesomeIcon icon={faGooglePlus} /></li>
                     </ul>
                  </div>
               </div>

               <div className="col-md-6 col-lg-4 col-sm-12">
                  <h4>Services.</h4>
                  <div className="row">
                     <div className="col-6">
                        <ul>
                           <li><Link to="/home">Engine Diagnostics</Link></li>
                           <li><Link to="/home">Vehicles Damaged</Link></li>
                           <li><Link to="/home">Air Conditioning Evac</Link></li>
                           <li><Link to="/home">Anti Lock Brake Service</Link></li>
                           <li><Link to="/home">Computer Diagnostics</Link></li>
                           <li><Link to="/home">Performance Upgrades</Link></li>
                        </ul>
                     </div>
                     <div className="col-6">
                        <ul>
                           <li><Link to="/home">Car Wash & Cleaning</Link></li>
                           <li><Link to="/home">Choose your Repairs</Link></li>
                           <li><Link to="/home">Free Consultancy</Link></li>
                           <li><Link to="/home">Emergency Time</Link></li>
                        </ul>
                     </div>
                  </div>
               </div>

               <div className="col-md-12 col-lg-4 col-sm-12 mt-3 mt-md-0">
                  <h4>News Feeds.</h4>
                  <div className="footer-contact">
                     <div className="first-news">
                        <p><FontAwesomeIcon icon={faCalendarAlt} /> June 24, 2020</p>
                        <h5>The branch of biology that deals with the normal.</h5>
                     </div>
                     <hr />
                     <div className="second-news">
                        <p><FontAwesomeIcon icon={faCalendarAlt} /> June 28, 2020</p>
                        <h5>Electric Car Maintenance, Servicing & Repairs</h5>
                     </div>
                     <hr />
                     <div className="third-news">
                        <p><FontAwesomeIcon icon={faCalendarAlt} /> June 24, 2020</p>
                        <h5>The branch of biology that deals with the normal.</h5>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;