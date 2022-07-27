import React from 'react';
import '../../../css/home.css';
import brake from '../../../image/home/brakes.png';
import macine from '../../../image/home/mechanic.png';
import safety1 from '../../../image/home/safety-1.jpg';
import safety2 from '../../../image/home/safety-2.jpg';


const Safety = () => {
    return (
        <div id="safety" className="py-sm-0 py-md-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6 className="section-sub-title">WHY CHOOSE US</h6>
                        <h1 className="section-title">Safety Is Our First Priority<span>.</span></h1>
                        <p className="section-title-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <div className="mt-5">
                            <div className="d-flex">
                                <div>
                                    <img style={{width:'70px'}} src={brake} alt="" />
                                </div>
                                <div className="ms-5">
                                    <h4>Anytime Get Your Service</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim</p>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div>
                                    <img style={{width:'70px'}} src={macine} alt="" />
                                </div>
                                <div className="ms-5">
                                    <h4>Hardcore Repair Service</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="safety-img-wrap">
                            <div className="safety-img-1">
                                <img src={safety1} alt="Image1" />
                            </div>
                            <div className="safety-img-2">
                                <img src={safety2} alt="Image2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Safety;