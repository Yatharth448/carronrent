import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link, If, Else } from 'react-router-dom';
import Searchable from 'react-searchable-dropdown';
import { Dropdown, DropdownButton } from 'react-bootstrap'


const options = [
  { name: 'Swedish', value: 'sv' },
  { name: 'English', value: 'en' },
  { name: 'Spanish', value: 'es' },
];


function HeroSection() {
  const [searchText, setSearchText] = React.useState("");


  return (
   <>
   <div className='top-one'>
      {/* <marquee width='100%'>A Product of TechWorld</marquee> */}
      {/* <p class="blink">Blinking text</p> */}
      
        {/* <div className= 'email-container'>
          <img className='email-img' src={require('../ images / Header.png')} alt="Freedom Blog" />
          <i className='email-img' class="fa fa-envelope" aria-hidden="true"></i> */}
           <p class="blink-top">
          <a href="tel:9479577160">Call us at 9479577160</a><br/>
           <a href="mailto:business@carronrent.com">Email Us: business@carronrent.com</a> <br/>
          <a href="mailto:support@carronrent.com">Email Us: support@carronrent.com</a> <br />
           <a href="mailto:sales@carronrent.com">Email Us: sales@carronrent.com</a>
           </p>
        {/* </div> */}
        {/* <p class="blink"><a href="mailto:sales@carronrent.com">Email Us: sales@carronrent.com</a></p>
        <p class="blink"><a href="mailto:support@carronrent.com">Email Us: support@carronrent.com</a></p> */}
        
    </div>
    <div className='hero-container'>
      
      {/* <video src='/public/videos/video-2.mp4' autoPlay loop muted /> */}
      
      <h1>NOW ITS EASY</h1>
      <p>To Rent a Car</p>
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>

      </div> */}
      <div className='hero-card'>
        <p>Select your city</p>
        <div className='hero-card-search-area'>
         <Searchable
          value=""
          placeholder="Select city for booking" // by default "Search"
          notFoundText="No result found" // by default "No result found"
          //noInput
          options={[
            {
              value: 'Greater Noida',
              label: 'Greater Noida'
            },
            {
              value: 'Noida Extension',
              label: 'Noida Extension'
            },
            {
              value: 'Ghaziabad Noida',
              label: 'Ghaziabad Noida'
            } 
        
        ]}
          onSelect={value => {
            console.log(value);
            setSearchText(value);
          }}
          listMaxHeight={200} //by default 140
        />
         {/* <Button buttonStyle='btn--outline' onClick={() => {'/product'}}>Search</Button> */}
         
        </div>
       
        {searchText === "" ? <Link to="" className="hero-card-btn">Search</Link> : <Link to="/products" className="hero-card-btn">Search</Link>}

        
    

      </div>
    </div>
    </>
  );
}

export default HeroSection;
