import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import CarBestDeal from '../CarBestDeal/CarBestDeal';
import Services from '../Services/Services';
import Header from '../Header/Header';
import NewsFeeds from '../NewsFeeds/NewsFeeds';
// import Safety from '../Safety/Safety';




const Home = () => {
   return (
      <div>
         <Header />
         <Services/>
         {/* <Safety /> */}
         <CarBestDeal/>
         <NewsFeeds/>
         <Footer/>
      </div>
   );
};

export default Home;