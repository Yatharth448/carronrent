import React, { useEffect } from 'react';
import '../../App.css';
import CarList from '../CarList';
import HeroSection from '../HeroSection';
import HeroSection2 from '../HeroSection2';
import Cards from '../Cards';
import CustomerReviews from '../CustomerReviews';
import Footer from '../Footer';

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
}, []);

  return (
    <>
    <CarList/>
     <Footer />
      {/* <HeroSection />
      <Cards /> 
      <HeroSection2 /> */}
      {/* <CustomerReviews /> */}
     {/* <Footer /> */}
    </>
  );
}

export default Home;
