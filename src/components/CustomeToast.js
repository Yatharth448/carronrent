import React from "react";
import { Col, Row, Toast, ToastContainer } from 'react-bootstrap';
const CustomeToast = ({ show, toastMessage, bg, setShow}) =>{
    return (
        <Row>
            <Col xs={6}>
                <ToastContainer position={'top-end'} style={{ marginTop: 100, marginRight: 10 }}>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide bg={bg}>
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
export default CustomeToast;