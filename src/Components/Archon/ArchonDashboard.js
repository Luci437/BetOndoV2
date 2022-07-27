import React from "react";
import { NavLink } from "react-router-dom";
import ArchonMainSlider from "./ArchonMainSlider";
import {
  GiAmericanFootballHelmet,
  GiAmericanFootballPlayer,
} from "react-icons/gi";
import flag1 from "../../Images/flag1.jpeg";
import flag2 from "../../Images/flag2.jpeg";
import badge from "../../Images/badges.png";
import { useInView } from "react-intersection-observer";
import { siteConstant } from "../../Constants/commonConstants";

function ArchonDashboard() {
  const { ref, inView } = useInView({ threshold: siteConstant.THRESHOLD });

  return (
    <div className={"archon-main-container"}>
      <ArchonMainSlider />
      <div className="archon-menu-container">
        <NavLink to="/archon/create-team" className="archon-menu-buttons">
          <GiAmericanFootballPlayer className="archon-menu-icon" />
          MAKE TEAM
        </NavLink>
        <NavLink to="/archon/create-match" className="archon-menu-buttons">
          <GiAmericanFootballHelmet className="archon-menu-icon" />
          Schedule Match
        </NavLink>
      </div>

      <div
        className={inView ? "animateFadeIn promo-container" : "promo-container"}
        ref={ref}
      >
        <img src={badge} className="promo-image" alt="promo-badge" />
        <span>
          <h6>WELCOME TO</h6>
          <h1>BETONDO</h1>
        </span>
      </div>
      <div
        className={
          inView ? "animateFadeIn archon-vs-container" : "archon-vs-container"
        }
        ref={ref}
      >
        <div className="archon-vs-box">
          <img alt="flags" src={flag1} className="archon-vs-flags" />
        </div>
        <div className="archon-vs-box">
          <img alt="flags" src={flag2} className="archon-vs-flags" />
        </div>
        <div className="archon-vs-info-container">
          <p className="archon-vs-info-text">AGN</p>
          <p className="archon-vs-info-text">01</p>
          <p className="archon-vs-info-text">:</p>
          <p className="archon-vs-info-text">02</p>
          <p className="archon-vs-info-text">PKN</p>
        </div>
      </div>
    </div>
  );
}

export default ArchonDashboard;
