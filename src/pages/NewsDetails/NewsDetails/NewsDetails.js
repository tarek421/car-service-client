import React from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import NewsContent from '../NewsContent/NewsContent';

const NewsDetails = () => {
    const id = useParams();
    return (
        <div>
            <Banner title="News Details"/>
            <NewsContent id={id.id} />
            <Footer />
        </div>
    );
};

export default NewsDetails;