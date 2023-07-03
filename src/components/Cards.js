import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';
import loGo from '../logo_carr_on_rent.png'
function Cards() {
  return (
    <div className='cards'>
      
      <h1>Three Simple Step</h1>
      {/* <h2>Sign up in seconds, do th steps easily and start</h2> */}
      <h2>feel the new experience</h2>
      {/* <div className='cards__container'>
        <div className='cards__wrapper'> */}
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
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              carName='01- Search Location'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              carName='02- Easy Payment'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              carName='03- Make Trip'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul> */}
<div className='step-card-container'>
          {/* 1 */}
      <div className='step-card'>
      <img className="step-logo" src={loGo} alt="Car Rentals" />
        <h3>01. Select location</h3>
        <h2>{"Select your location for car Requirement"}</h2>
        

      </div>
{/* 2 */}
      <div className='step-card'>
      <img className="step-logo" src={loGo} alt="Car Rentals" />
        <h3>02. Book a Car</h3>
        <h2>Select a car and book accordingly </h2>

      </div>
{/* 3 */}
      <div className='step-card'>
      <img className="step-logo" src={loGo} alt="Car Rentals" />
        <h3>03. Enjoy the Ride</h3>
        <h2>Enjoy your ride with unlimited KMs</h2>

      </div>

      </div>

        {/* </div>
      </div> */}
    </div>
  );
}

export default Cards;
