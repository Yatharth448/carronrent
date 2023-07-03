import React, { useEffect } from 'react';
import './BookNow.css';
import CustomeToast from './CustomeToast';
import { Button, Form, Col, Row, Toast, ToastContainer, Spinner } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import 'reactjs-popup/dist/index.css';

export default function BookNow() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [mobile, setMobile] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [show, setShow] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false)
    const [toastMessage, setToastMessage] = React.useState('');
    const [bg, setBg] = React.useState('warning')

    function spinner() {
        return (
            isLoading === true ? <Spinner animation="border" role="status" as="span"></Spinner> : null
        );
    }

    function AutohideExample() {
        return (
            <Row>
                <Col xs={6}>
                    <ToastContainer position={'top-end'} style={{marginTop: 100, marginRight: 10}}>
                        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide bg={'warning'}>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">CarronRent</strong>
                            {/* <small>11 mins ago</small> */}
                        </Toast.Header>
                            <Toast.Body >{toastMessage}</Toast.Body>
                    </Toast>
                    </ToastContainer>
                </Col>
            </Row>
        );
    }

    const sendEmail = () => {
        setBg('warning')
        if (name == '') {
            setToastMessage('Please enter your name');
            setShow(true)
        }
        else if (email == '') {
           
            setToastMessage('Please enter your email');
            setShow(true)
        }
        else if (mobile == '') {
            setToastMessage('Please enter mobile number');
        }
        else if (message == '') {
            setToastMessage('Please enter message');
        }
        else {
 
            setIsLoading(true)
            const templateParams = {
                name: name,
                email: email,
                mobile: mobile,
                message: message,
            }

            emailjs.send('service_dskpsho', 'template_ub20j3q', templateParams, 'user_Ah3KFgcVih9C21WTcchE0')
                .then((response) => {
                    setIsLoading(false)
                    console.log('SUCCESS!', response.status, response.text);
                    setBg('success')
                    setToastMessage('Thanks for your Booking with CarronRent, Executive will connect with you shortly');
                    setShow(true)
                }, (err) => {
                    setBg('danger')
                    setIsLoading(false)
                    setShow(true)
                    console.log('FAILED...', err);
                    alert(err);
                });
         }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        // setShow(true)
    }, []);
    // window.addEventListener('resize', showButton)
    return (

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70%' , flexDirection: 'column'}}>
            <h1 style={{marginTop: 30}}>Book Now</h1>
        <Form className='form-inline'>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" onChange={e => setName(e.target.value)} value={name}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} value={email} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Contact</Form.Label>
                    <Form.Control type="contact" placeholder="Enter contact" onChange={e => setMobile(e.target.value)} value={mobile} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} type="name" placeholder="Please enter message" onChange={e => setMessage(e.target.value)} value={message} />
                <Form.Text className="text-muted">
                    Note: We'll never share your info with anyone else.
                </Form.Text>
            </Form.Group>
        </Form>
           
            <Button disabled={isLoading} size="lg" className='btn--outline' onClick={() => sendEmail()}> {spinner()} Book</Button>
            <CustomeToast show ={show} setShow={setShow} toastMessage={toastMessage} bg={bg}/>
         </div>
    );
}