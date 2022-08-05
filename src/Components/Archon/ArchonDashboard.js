import React from "react";
import { NavLink } from "react-router-dom";
import ArchonMainSlider from "./ArchonMainSlider";
import {
  GiAmericanFootballHelmet,
  GiAmericanFootballPlayer,
} from "react-icons/gi";

// import { useInView } from "react-intersection-observer";
// import { siteConstant } from "../../Constants/commonConstants";

function ArchonDashboard() {
  // const { ref, inView } = useInView({ threshold: siteConstant.THRESHOLD });

  return (
    <div className={"archon-main-container"}>
      <ArchonMainSlider />
      <div className="archon-menu-container">
        <NavLink to="/archon/list-teams/create-team" className="archon-menu-buttons">
          <GiAmericanFootballPlayer className="archon-menu-icon" />
          CREATE TEAM
        </NavLink>
        <NavLink
          to="/archon/list-matches/create-match"
          className="archon-menu-buttons"
        >
          <GiAmericanFootballHelmet className="archon-menu-icon" />
          Schedule Match
        </NavLink>
      </div>

      {/* <div
        className={inView ? "animateFadeIn promo-container" : "promo-container"}
        ref={ref}
      >
        <img src={badge} className="promo-image" alt="promo-badge" />
        <span>
          <h6>WELCOME TO</h6>
          <h1>BETONDO</h1>
        </span>
      </div> */}
      
    </div>
  );
}

export default ArchonDashboard;
