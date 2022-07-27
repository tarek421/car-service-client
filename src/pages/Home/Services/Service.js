import React from 'react';
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'

const Service = ({ service }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div style={{ border: '1px solid #0b0a0c4a' }} className="feature-card px-3 py-5 text-center text-md-start">
                {<img className='text-center' src={service.icon} alt="" /> || <Skeleton />}
                <h3 className='my-3'>{service.title || <Skeleton />}</h3>
                <p>{service.header.slice(0, 150) || <Skeleton />}......</p>
                <Link to={`/servicesDetail/${service.id}`}>Read More</Link>
            </div>
        </div>
    );
};

export default Service;