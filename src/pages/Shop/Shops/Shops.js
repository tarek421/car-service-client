import React from 'react';
import FavouriteItem from '../../FavouriteItem/FavouriteItem';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Shop from './Shop/Shop';

const Shops = () => {
    return (
        <div>
            <Banner title="Shop" />
            <Shop/>
            <FavouriteItem/>
            <Footer />
        </div>
    );
};

export default Shops;