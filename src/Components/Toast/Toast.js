import React, {useEffect, useContext} from 'react';
import { useState } from 'react';
import { IoInformationCircle } from "react-icons/io5";
import { TimerContext } from '../../Context/TimerContext';

const Toast = (props) => {

    const [toastTimeOut, setToastTimeOut] = useState(5000);
    const {toastView} = useContext(TimerContext);
    const [showToast, setShowToast] = toastView;


    useEffect(() => {
        const toastTimer = setTimeout(() => {
            setShowToast(false)
        }, toastTimeOut);
        return () => {
            clearInterval(toastTimer);
        }
    }, [props])


    return (
        <div className="toastContainer">
            <p><IoInformationCircle className="toastIcon" /> {props.message}</p>
        </div>
    )
}

export default Toast
