import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import loGo from '../logo_carr_on_rent.png'

const open = (status) => {

  switch (status) {
    case 0:
      return window.open("https://www.facebook.com/carronrent");

    case 1:
      return window.open("https://www.instagram.com/self_drive_car_on_rent/");


    case 2:
      return window.open("https://www.youtube.com/channel/UC_fuRXRBcpM16__NKsqJx0w");

    case 3:
      return window.open("http://twitter.com/");

    default:
      return window.open("https://www.linkedin.com/in/carr-on-rent-7a6903229/");

  }

}
function Footer() {

  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      <section className='footer-subscription'>
        {/* <a href="tel:8269779609">Call us at 8269779609</a>
<a href="tel:6395897318">Call us at 6395897318</a> */}
      </section>

      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Sitemap</h2>
            <Link to='/'>Home</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Contact</Link>
            {/* <Link to='/'>Why Choose Us</Link> */}
            {/* <Link to='/'>Featured Cars</Link> */}
          </div>
          {/* <div class='footer-link-items'> */}
          {/* <h2>Support</h2>
            <Link to='/'>Contact</Link> */}
          {/* <Link to='/'>Sign in</Link> */}
          {/* <Link to='/'>Help</Link> */}
          {/* <Link to='/'>Terms and Conditions</Link> */}
          {/* </div> */}
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Address</h2>
            {/* <Link to='/'>Flat No. 25017</Link> */}
            <Link to='/'>Gaur City </Link>
            <Link to='/'>Near Gaur City Mall</Link>
            <Link to='/'>Noida 201308</Link>
            <Link to='/'>Uttar Pradesh, India</Link>
          </div>
          {/* <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div> */}

          <div className='input-areas'>
            <p className='footer-subscription-text'>
              Sign up for monthly newsletter.
            </p>
            <form>
              <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Your Email'
              />
              <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
            <div className='social-icons'>
              <Link
                className='social-icon-link facebook'
                aria-label='Facebook'
                to={() => open(0)}
                onClick={() => open(0)}
              >

                <i className='fab fa-facebook-f' />
              </Link>
              <Link
                className='social-icon-link instagram'
                to={() => open(1)}
                onClick={() => open(1)}
                aria-label='Instagram'
              >
                <i className='fab fa-instagram' />
              </Link>
              <Link
                className='social-icon-link youtube'
                to={() => open(2)}
                onClick={() => open(2)}
                aria-label='Youtube'
              >
                <i className='fab fa-youtube' />
              </Link>
              <Link
                className='social-icon-link twitter'
                to={() => open(3)}
                onClick={() => open(3)}
                aria-label='Twitter'
              >
                <i className='fab fa-twitter' />
              </Link>
              <Link
                className='social-icon-link twitter'
                to={() => open(4)}
                onClick={() => open(4)}
                aria-label='LinkedIn'
              >
                <i className='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <section class='social-media'> */}
      <div className='copyright-bottom-area'>
        {/* <div className='footer' */}
        <Link to="/" className="footer-logo" >

          <img className="footer-logo" src={loGo} alt="Car Rentals" />
        </Link>
      </div>
      <div className='copyright-bottom-area'>
        <h2>@ 2022 all right reserved</h2>
      </div>
      <div className='copyright-bottom-area'>
        <h2>CarronRent</h2>
        <h2>Manage and Operated By TechWorld</h2>
      </div>


      {/* </section> */}
    </div>
  );
}

export default Footer;
