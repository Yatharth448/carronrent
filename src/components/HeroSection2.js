import React from 'react';
import '../App.css';

import './HeroSection2.css';






function HeroSection2() {
  return (
    <div className='hero-container2'>
      <video src='/public/videos/video-2.mp4' autoPlay loop muted />
      {/* <h1>NOW ITS EASY</h1>
      <p>To Rent a Car</p> */}
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
      
    </div>
  );
}

export default HeroSection2;
