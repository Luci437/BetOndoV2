import React, {useContext} from 'react';
import { IoIosArrowBack } from 'react-icons/io'
import {useLastLocation} from 'react-router-last-location'
import {useHistory} from 'react-router-dom';
import { CgMenuRightAlt } from "react-icons/cg";
import Profile from '../Profile/Index';
import { TimerContext } from '../../Context/TimerContext';

const NavBar = () => {

    const history = useHistory();
    const lastLocation = useLastLocation();

    const {nav} = useContext(TimerContext);
    const [showNav, setShowNav] = nav;


    const goBack = (e) => {
        e.preventDefault();
        if(lastLocation != null) {
            history.push(lastLocation.pathname);
        }else {
            history.push("/");
        }
    }

    return (
        <div className="navBarContainer">
            <div className="navBarChild" onClick={goBack}>
                <IoIosArrowBack className={!lastLocation ? "dimmedTextColor navIcons" : "navIcons"} />
            </div>
            <div className="navBarChild">
                <p className="bigTitle siteTitle">Bet<span>Ondo</span></p>
            </div>
            <div className="navBarChild">
                <CgMenuRightAlt className="navIcons" onClick={()=>setShowNav(true)} />
            </div>
            {showNav && <Profile />}
        </div>
    )
}

export default NavBar
