import { render } from '@testing-library/react';
import React, {useState, useContext} from 'react';
import { textConstants } from '../../Constants/textConstants';
import { TimerContext } from '../../Context/TimerContext';

const JoinButton = () => {

    const [joinLoading, setJoinLoading] = useState(false);

    const {value4, toastView, toastInfo} = useContext(TimerContext)
    const [joined, setJoined] = value4;    
    const [showToast, setShowToast] = toastView;
    const [toastMessage, setToastMessage] = toastInfo;


    const joinContest = () => {
        setJoinLoading(!joinLoading)
        setJoined(!joined);
        // setShowToast(true);
        // setToastMessage(textConstants.JOINED_CONTEST);
    }

    return (
        <div className="joinButtonContainer">
                <span>
                    <p>Join Now</p>
                    <p>You can't exit if you join this contest.</p>
                </span>
            <button disabled={joinLoading} className={joinLoading ? "disabledButton joinButton" : "joinButton" } onClick={joinContest}>JOIN <span> 50</span></button>
        </div>
    )
}

export default JoinButton
