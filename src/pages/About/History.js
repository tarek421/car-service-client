import React, { useState } from 'react';
import image1 from '../../image/14.jpg';
import image2 from '../../image/12.jpg';
import image3 from '../../image/13.jpg';

const History = () => {
    const [active, setActive] = useState("1940");
    console.log(active)
    return (
        <div id="history" className="py-5 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 m-auto">
                        <div className="nav d-flex justify-content-between">
                            <div onClick={() => setActive("1900")} className={active === "1900" ? "active nav-item" : "nav-item"}>1900</div>
                            <div onClick={() => setActive("1940")} className={active === "1940" ? "active nav-item" : "nav-item"}>1940</div>
                            <div onClick={() => setActive("2000")} className={active === "2000" ? "active nav-item" : "nav-item"}>2000</div>
                            <div onClick={() => setActive("2010")} className={active === "2010" ? "active nav-item" : "nav-item"}>2010</div>
                            <div onClick={() => setActive("2020")} className={active === "2020" ? "active nav-item" : "nav-item"}>2020</div>
                        </div>
                    </div>
                    {
                        active === "1900" && <div className="col-12">
                            <div className="row mt-5 pt-5">
                                <div className="col-sm-12 col-md-6">
                                    <img src={image1} alt="" />
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <h6 className="text-danger">GET REWARDS</h6>
                                    <h1>We Started Our Journey<span className="text-danger">.</span></h1>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    }

                    {
                        active === "1940" && <div className="col-12">
                            <div className="row mt-5 pt-5">
                                <div className="col-sm-12 col-md-6">
                                    <img src={image2} alt="" />
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <h6 className="text-danger">GET REWARDS</h6>
                                    <h1>It Was An Sweet Journey Time <span className="text-danger">.</span></h1>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    }

                    {
                        active === "2000" && <div className="col-12">
                            <div className="row mt-5 pt-5">
                                <div className="col-sm-12 col-md-6">
                                    <img src={image3} alt="" />
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <h6 className="text-danger">GET REWARDS</h6>
                                    <h1>It Was An Sweet Journey Time <span className="text-danger">.</span></h1>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    }

                    {
                        active === "2010" && <div className="col-12">
                            <div className="row mt-5 pt-5">
                                <div className="col-sm-12 col-md-6">
                                    <img src={image1} alt="" />
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <h6 className="text-danger">GET REWARDS</h6>
                                    <h1>It Was An Sweet Journey Time <span className="text-danger">.</span></h1>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    }

                    {
                        active === "2020" && <div className="col-12">
                            <div className="row mt-5 pt-5">
                                <div className="col-sm-12 col-md-6">
                                    <img src={image2} alt="" />
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <h6 className="text-danger">GET REWARDS</h6>
                                    <h1>It Was An Sweet Journey Time <span className="text-danger">.</span></h1>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default History;