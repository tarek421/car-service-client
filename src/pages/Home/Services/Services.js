import React, { useEffect, useState } from 'react';

import './CoreFeatures.css';
import Service from './Service';





const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = `https://tan-glorious-skunk.cyclic.app/services`
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div id="core-features" className='py-5 bg-light'>
            <div className="container">
                <div className="row">
                    <h1 className='text-center'>What We Do.</h1>
                    {
                        services.map(service => <Service key={service.id} service={service} />)
                    }
                </div>
            </div>
        </div>
    );
};


export default Services;