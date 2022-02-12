
import React, {useState, useContext} from 'react';
import { TimerContext } from '../../Context/TimerContext';

const JoinButton = () => {

    const [joinLoading, setJoinLoading] = useState(false);
    const {joined, dispatchTimerEvent} = useContext(TimerContext)   


    const joinContest = () => {
        setJoinLoading(!joinLoading)
        dispatchTimerEvent("ADD JOINED", {
            value: !joined
        })
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
