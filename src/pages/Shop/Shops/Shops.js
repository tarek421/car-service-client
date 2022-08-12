import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Shop from './Shop/Shop';

const Shops = () => {
    return (
        <div>
            <Banner title="Shop" />
            <Shop/>
            <Footer />
        </div>
    );
};

export default Shops;