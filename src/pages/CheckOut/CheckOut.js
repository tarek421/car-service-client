import React from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../Shared/Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import CheckOutContent from './CheckOutContent';

const CheckOut = () => {
    const id = useParams();
    return (
        <div>
            <Banner title="CheckOut" />
            <CheckOutContent id={id.id} />
            <Footer />
        </div>
    );
};

export default CheckOut;