import React from 'react';
import './Cards.css';
import './HeroSection.css'
import CardItem from './CardItem';
import { ReactComponent as CompanyIcon } from '../logo.svg';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';


function CarList() {
  return (
    <>
    <div className='top-one'>
      {/* <marquee width='100%'>A Product of TechWorld</marquee> */}
      {/* <p class="blink">Blinking text</p> */}
      
        {/* <div className= 'email-container'>
          <img className='email-img' src={require('../ images / Header.png')} alt="Freedom Blog" />
          <i className='email-img' class="fa fa-envelope" aria-hidden="true"></i> */}
           <p class="blink-top">
          <a href="tel:8269779609">Call 9479577160</a> <br/>
           {/* <a href="mailto:business@carronrent.com">Email Us: business@carronrent.com</a> <br/> */}
          <a href="mailto:support@carronrent.com"> support@carronrent.com</a> <br />
           {/* <a href="mailto:sales@carronrent.com">Email Us: sales@carronrent.com</a> */}
           </p>
        {/* </div> */}
        {/* <p class="blink"><a href="mailto:sales@carronrent.com">Email Us: sales@carronrent.com</a></p>
        <p class="blink"><a href="mailto:support@carronrent.com">Email Us: support@carronrent.com</a></p> */}
        
    </div>
   
    <div className='cards'>
   
      {/* <h1>Three Simple Step</h1>
      <h2>Sign up in seconds, do th steps easily and start</h2>
      <h2>feeling your new experience</h2> */}
      <div className='wrapper'>
        {/* <div className='cards__wrapper'> */}
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul> */}
          {/* <ul className='cards__items'> */}
         
            <CardItem
              src='images/amaze.webp'
              label='2500/day'
              carName='Honda Amaze'
              kmDriven='500km'
              seater='5 seater'
              path='/BookNow'
            />
           
            <CardItem
              src='images/scorpio.png'
              carName='Mahindra Scorpio'
              label='3500/day'
              kmDriven='500km'
              seater='7 seater'
              path='/BookNow'
            />
 
            <CardItem
              src='images/breza.jpeg'
              carName='Maruti Vetara Breeza'
              label='2500/day'
              kmDriven='500km'
              seater='5 seater'
              path='/BookNow'
            />
            
            <CardItem
              src='images/ertiga.jpeg'
              carName='Maruti Suzuki Ertiga'
              label='3200/day'
              kmDriven='500km'
              seater='7 seater'
              path='/BookNow'
            />
            
            <CardItem
              src='images/swift.jpeg'
              carName='Maruti Suzuki Swift'
              label='2500/day'
              kmDriven='500km'
              seater='5 seater'
              path='/BookNow'
            />
             <CardItem
              src='images/swiftdezire.jpeg'
              carName='Maruti Suzuki Dzire'
              label='2500/day'
              kmDriven='500km'
              seater='5 seater'
              path='/BookNow'
            />
            <CardItem
              src='images/creta.jpeg'
              carName='Hyundai Creta'
              label='2700/day'
              kmDriven='500km'
              seater='5 seater'
              path='/BookNow'
            />
            <CardItem
              src='images/inova.jpeg'
              carName='Toyota Innova Crysta'
              label='3500/day'
              kmDriven='500km'
              seater='7 seater'
              path='/BookNow'
            />
            
           
            
          {/* </ul> */}
        {/* </div> */}
      </div>
      <WhatsAppWidget CompanyIcon={CompanyIcon} phoneNumber="9479577160" />
    </div>
    </>
  );
}

export default CarList;
