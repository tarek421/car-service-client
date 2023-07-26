import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import ContactDetail from '../ContactDetail/ContactDetail';
import ContactForm from '../ContactForm/ContactForm';
import './Contact.css';


const Contact = () => {
    return (
        <div>
            <Banner title="Contact" />
            <ContactDetail />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Contact;