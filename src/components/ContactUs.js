import React, { useState, useEffect } from 'react';
import './ContactUs.css';
import { Button } from './Button';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Footer from './Footer';
import Loader from "react-js-loader";
export default function ContactUs() {
    const [loading, setLoading] = React.useState('false');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [mobile, setMobile] = React.useState('');
    const [message, setMessage] = React.useState('');

    function spinner() {

        return (
            <div className={"item"}>
                <Loader type="spinner-circle" bgColor={'rgba(0, 0, 0, 0.3)'} color={'#fff'} title={"spinner-circle"} size={100} />
            </div>

        )

    }


    const PopupExample = () => (
        <Popup trigger={<button>Trigger</button>} position="top left">
            {close => (
                <div>
                    Content here
                    <a className="close" onClick={close}>
                        &times;
                    </a>
                </div>
            )}
        </Popup>
    );
    const templateParams = {
        name: name,
        email: email,
        mobile: mobile,
        message: message,
    };
    const sendEmail = () => {

        if (!name.trim()) {
            alert('Enter Name')
        }
        else if (!email.trim()) {
            alert('Enter Email')
        }
        else if (!mobile.trim()) {
            alert('Enter Contact Number')
        }
        else if (!message.trim()) {
            alert('Enter your requirements')
        }
        else {
            setLoading(true)
            emailjs.send('service_ycyea3a', 'template_pqf5k17', templateParams, 'cHp5DMYQrc3Hi7XLu')
                .then((response) => {
                    setLoading(false);
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Thanks for Connecting with CarronRent, we will reach you shorlty')
                }, (err) => {
                    console.log('FAILED...', err);
                    alert(err)
                });
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    // window.addEventListener('resize', showButton)
    return (


        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70%', flexDirection: 'column' }}>
            <div className="contact-form-box">
                <p>Contact Us</p>
                {/* <form className= 'form-c'> */}

                <input
                    className='contact-input'
                    name='Name'
                    type='name'
                    placeholder='Enter you name'
                    value={name}
                    onInput={e => setName(e.target.value)}
                />
                <input
                    className='contact-input'
                    name='email'
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    onInput={e => setEmail(e.target.value)}
                />
                <input
                    className='contact-input'
                    name='mobile'
                    type='mobile'
                    placeholder='Enter your contact number'
                    value={mobile}
                    onInput={e => setMobile(e.target.value)}
                />
                <input
                    className='contact-input'
                    name='message'
                    type='message'
                    placeholder='Enter requirement(optional)'
                    value={message}
                    onInput={e => setMessage(e.target.value)}
                />

                {/* </form> */}
                {/* <Link className='btn--outline' onClick={sendEmail()}>Submit</Link> */}
                <button className='btn--outline' onClick={() => sendEmail()}>Send</button>
                {loading === true ? spinner() : null}
            </div>

            <Footer />
        </div>

    );
}
