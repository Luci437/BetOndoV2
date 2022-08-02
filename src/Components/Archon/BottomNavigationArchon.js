import React, { useEffect, useRef } from "react";

import { AiFillHome } from "react-icons/ai";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { IoMdPeople } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { CgData } from "react-icons/cg";
import { AiTwotoneSetting } from "react-icons/ai";

function BottomNavigationArchon() {
  const navRef = useRef();

  // for automatically hide bottom nav bar
  useEffect(() => {
    var previousScrollPosition = window.pageYOffset;
    window.onscroll = () => {
      if (navRef.current) {
        let currentScrollPosition = window.pageYOffset;
        if (currentScrollPosition > previousScrollPosition) {
          navRef.current.style.opacity = "0";
          navRef.current.style.visibility = "hidden";
        } else {
          navRef.current.style.opacity = "1";
          navRef.current.style.visibility = "visible";
        }
        previousScrollPosition = currentScrollPosition;
      }
    }
  }, []);

  return (
    <div className="bottom-nav-container" ref={navRef}>
      <NavLink
        to="/archon/dashboard"
        activeClassName="bottom-nav-button-icons-active"
        className="bottom-nav-nav"
      >
        <button>
          <AiFillHome className="bottom-nav-icons" />
          <p>Home</p>
        </button>
      </NavLink>
      <NavLink
        to="/archon/create-team"
        activeClassName="bottom-nav-button-icons-active"
        className="bottom-nav-nav"
      >
        <button>
          <IoMdPeople className="bottom-nav-icons" />
          <p>Teams</p>
        </button>
      </NavLink>
      <NavLink
        to="/archon/list-matches"
        activeClassName="bottom-nav-button-icons-active"
        className="bottom-nav-nav"
      >
        <button>
          <GiAmericanFootballHelmet className="bottom-nav-icons" />
          <p>Match</p>
        </button>
      </NavLink>
      <NavLink
        to="/archon/live-match"
        activeClassName="bottom-nav-button-icons-active"
        className="bottom-nav-nav"
      >
        <button>
          <CgData className="bottom-nav-icons" />
          <p>Live</p>
        </button>
      </NavLink>
      <NavLink
        to="/archon/config"
        activeClassName="bottom-nav-button-icons-active"
        className="bottom-nav-nav"
      >
        <button>
          <AiTwotoneSetting className="bottom-nav-icons" />
          <p>Config</p>
        </button>
      </NavLink>
    </div>
  );
}

export default BottomNavigationArchon;
