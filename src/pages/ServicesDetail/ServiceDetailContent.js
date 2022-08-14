import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetailContent = () => {
    const { id } = useParams();

    const [allServices, setAllServices] = useState([]);
    const [service, setService] = useState([]);
        // const { title, coverPhoto, imageUrl1, imageUrl2, header,description1, description2 } = services[0];
        
    console.log(allServices, service)

    useEffect(() => {
        const url = `https://car-services.herokuapp.com/services`
        fetch(url)
        .then(res => res.json())
        .then(data => setAllServices(data))
    },[id]);

    useEffect(() => {
        const url = `https://car-services.herokuapp.com/services/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    },[id]);

    

    return (
        <div id="service-detail" className='service-detail my-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-12 col-lg-3">
                        <ul className="vertical-menu">
                            {
                                allServices.map(singleService => {
                                    console.log(singleService.title, service[0]?.title);
                                    return <li className={singleService.title === service[0]?.title ? 'selected' : ''}>
                                        <Link to={`/servicesDetail/${singleService.id}`}>{singleService.title}</Link>
                                    </li>
                                })
                            }
                        </ul>
                    </div>

                    <div className="col-md-9 col-sm-12 col-lg-9">
                    <img className='' style={{ width: '100%' }} src={service[0]?.coverPhoto} alt="" />
                        <div className="content py-5">
                            <p>{service[0]?.description}</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <img className='' style={{ width: '100%' }} src={service[0]?.image1} alt="" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img className='' style={{ width: '100%' }} src={service[0]?.image2} alt="" />
                            </div>
                        </div>

                        <div className="content py-5">
                            <h4 className='text-black'>{service[0]?.title}</h4>
                            <p>{service[0]?.paragraph1}</p>
                            <p>{service[0]?.paragraph2}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailContent;
