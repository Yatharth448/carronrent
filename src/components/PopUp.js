import React from 'react'

function PopUp(props) {

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="popup-close-btn">Close</button>
                {props.children}
            </div>
        </div>

    ) : "";

}

export default PopUp