
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import loGo from '../logo_carr_on_rent.png'
import {Button} from './Button'

function NavBar() {
    const [click, setClick] = React.useState(false);
    const [button, setButton] = React.useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    

    

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img className="navbar-logo" src={loGo} alt="Car Rentals" />
                         {/* <i className="logo" /> */}   
                    </Link>
                    <Link to="/" className="navbar-logo-text" onClick={closeMobileMenu}>CarronRent</Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                                Car List
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/contactus" className="nav-links" onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Price
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li> */}
                        {/* <li className='nav-item'>
                            <Link to="/" className="nav-links-mobile" onClick={showModalpop}>
                                Signup
                            </Link>
                        </li> */}
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline' onClick={showButton}>SIGN UP</Button>} */}
                    {/* <button type='button' onClick={showModalpop}>Hello</button> */}
                </div>

            </nav>
        </>
    )
}

export default NavBar;
