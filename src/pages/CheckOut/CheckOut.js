import React from 'react';
import Banner from '../Shared/Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import CheckOutContent from './CheckOutContent';

const CheckOut = () => {
    return (
        <div>
            <Banner title="CheckOut" />
            <CheckOutContent />
            <Footer />
        </div>
    );
};

export default CheckOut;