import React from 'react';
import Banner from '../Shared/Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import ServiceDetailContent from './ServiceDetailContent';
import './ServiceDetail.css';

const ServicesDetail = () => {
    return (
        <div>
            <Banner title="Service Details" />
            <ServiceDetailContent />
            <Footer />
        </div>
    );
};

export default ServicesDetail;