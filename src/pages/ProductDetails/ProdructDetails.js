import React from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../Shared/Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import ProductDetail from './left/ProductDetail';

const ProdructDetails = () => {
    let { id } = useParams();
    return (
        <div>
            <Banner title="Product Details" />
            <ProductDetail id={id} />
            <Footer />
        </div>
    );
};

export default ProdructDetails;