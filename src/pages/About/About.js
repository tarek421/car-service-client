import React from 'react';
import Banner from '../Shared/Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import History from './History';
import WhyChooseUs from './WhyChooseUs';
import './About.css';

const About = () => {
    return (
        <div>
            <Banner title="About Us" />
            <History />
            <WhyChooseUs />
            <Footer />
        </div>
    );
};

export default About;