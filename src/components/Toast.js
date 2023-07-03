import React, {useState} from "react";
import { ToastContainer, Toast } from 'react-bootstrap';



function ShowToast (props) {

    const [ showToast, setShowToast ] = useState(props.isToast)
    return(
        showToast &&
        <ToastContainer position = 'top-end' style={{marginTop:100}} onClick={()=> {setShowToast(false)}}>
      <Toast bg={'warning'}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body>{props.messageText}</Toast.Body>
      </Toast>
    </ToastContainer> 
      )};

      export default ShowToast;