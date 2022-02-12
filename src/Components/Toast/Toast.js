import React from 'react';
import { IoInformationCircle } from "react-icons/io5";

const Toast = () => {


    return (
        <div className="toastContainer">
            <p><IoInformationCircle className="toastIcon" /> {"Welcome"}</p>
        </div>
    )
}

export default Toast
