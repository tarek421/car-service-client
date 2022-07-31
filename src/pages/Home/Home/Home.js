import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Products from '../Products/Products';
import Services from '../Services/Services';
import Header from '../Header/Header';
import NewsFeeds from '../NewsFeeds/NewsFeeds';
import Safety from '../Safety/Safety';




const Home = () => {
   return (
      <div>
         <Header />
         <Services/>
         <Safety />
         <Products/>
         <NewsFeeds/>
         <Footer/>
      </div>
   );
};

export default Home;