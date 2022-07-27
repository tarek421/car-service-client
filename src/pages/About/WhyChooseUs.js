import React from 'react';
import image from '../../image/features/brakes.png'

const WhyChooseUs = () => {
    return (
        <div id="whyChooseUs" className="text-center py-5">
            <div className="container py-5">
                <h6 className="text-danger mt-3">FEATURES</h6>
                <h1 className="text-white">Why Choose Us <span className="text-danger">.</span></h1>
                <div className="row py-5">
                    <div className="col-sm-12 col-md-4">
                        <div className="item p-4 border text-start">
                            <div className="d-flex align-items-center">
                                <img className="w-25" src={image} alt="" />
                                <h4 className="w-75 ms-4">All Kind Brand</h4>
                            </div>
                            <p className="mt-3">Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="item p-4 border text-start">
                            <div className="d-flex align-items-center">
                                <img className="w-25" src={image} alt="" />
                                <h4 className="w-75 ms-4">All Kind Brand</h4>
                            </div>
                            <p className="mt-3">Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="item p-4 border text-start">
                            <div className="d-flex align-items-center">
                                <img className="w-25" src={image} alt="" />
                                <h4 className="w-75 ms-4">All Kind Brand</h4>
                            </div>
                            <p className="mt-3">Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;