import React, {useEffect, useRef, useContext} from 'react'
import { TimerContext } from '../../Context/TimerContext';
import sachin from "../../Images/sachin.png";
import { RiHome4Line } from "react-icons/ri";
import { IoTrophyOutline } from "react-icons/io5";
import { IoIosFootball } from "react-icons/io";
import { GoogleLogout } from 'react-google-login';
import { AuthContext } from '../../Context/AuthContext';
import { textConstants } from '../../Constants/textConstants';
import { BiLogOutCircle } from "react-icons/bi";

const ProfileDetails = () => {

    const containerRef = useRef();
    const { nav, toastView, toastInfo } = useContext(TimerContext);
    const [showNav, setShowNav] = nav;

    const today = new Date();
    const currentYear = today.getFullYear();

    const [auth, setAuth] = useContext(AuthContext)

    const [showToast, setShowToast] = toastView;
    const [toastMessage, setToastMessage] = toastInfo;

    useEffect(() => {
        // It's functionality is that when we click outside the profile box the profile box will be closed
        window.addEventListener("mousedown", checkContainer)
        return() => {
            window.removeEventListener("mousedown", checkContainer)
        }
    }, [])

    // this function will check weather the user click is inside or outside
    const checkContainer = (e) => {
        try {
            if (containerRef.current.contains(e.target)) {
                return
            }
            setShowNav(false)
        }catch(error){
            console.log(error.message)
        }
    }

    const logoutSuccess = (response) => {
        console.log("Google SignOut :: "+response)
        localStorage.removeItem("userId");
        localStorage.removeItem("vote");
        setAuth(false);
        setShowToast(true);
        setShowNav(false);
        setToastMessage(textConstants.LOGOUT);
    }

    const logoutFailure = (response) => {
        console.log("Google SignOut Error :: " + response)
        setShowToast(true);
        setToastMessage(textConstants.ERROR);
    }

    return (
        <div className="profileDetailsContainer animateFadeFromLeft" ref={containerRef}>
            <div className="profileNav">
                <p className="userProfileToken">123</p>
                <GoogleLogout
                    clientId={process.env.REACT_APP_GOOGLEID}
                    render={renderProps => (
                        <button className="logoutButton"
                            onClick={renderProps.onClick} disabled={renderProps.disabled}>
                            <BiLogOutCircle /> Logout
                        </button>
                    )}
                    buttonText="Logout"
                    onLogoutSuccess={logoutSuccess}
                    onFailure={logoutFailure} />
            </div>
            <div className="profileBox">
                <img src={sachin} alt="" className="profileImage" />
                <p className="userProfileName">Sachin Geo Jacob</p>
                <p className="userProfileId">#104049826035271870096</p>
            </div>
            <div className="profileMenuBox">
                <p className="profileMenuIcons"><RiHome4Line /></p>
                <p className="profileMenuIcons"><IoTrophyOutline /></p>
                <p className="profileMenuIcons"><IoIosFootball /></p>
            </div>
            <div className='profile-menu-tab-main-container'>

            </div>
            <div className="bottomDesign">
                <p>Betondo &copy; {currentYear}</p>
            </div>
        </div>
    )
}

export default ProfileDetails
