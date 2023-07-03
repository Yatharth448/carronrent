import React, { useEffect } from 'react';
import '../../App.css';
import '../CardItem.css';
import CarList from '../CarList';
import Footer from '../Footer';

export default function Products() {

  useEffect(() => {
    window.scrollTo(0, 0)
}, []);

  return (
    <>
  {/* <h1 className='products'>PRODUCTS</h1> */}
  {/* <div className="grid-container">
  <div>  */}
  <CarList/>
  <Footer />
  {/* </div>
  </div> */}
  </>
  );
}
