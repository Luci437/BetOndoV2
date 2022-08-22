import React from "react";
import { NavLink } from "react-router-dom";
import ArchonMainSlider from "./ArchonMainSlider";
import {
  GiAmericanFootballHelmet,
  GiAmericanFootballPlayer,
} from "react-icons/gi";
import { CgData } from "react-icons/cg";

// import { useInView } from "react-intersection-observer";
// import { siteConstant } from "../../Constants/commonConstants";

function ArchonDashboard() {
  // const { ref, inView } = useInView({ threshold: siteConstant.THRESHOLD });

  return (
    <div className={"archon-main-container"}>
      <ArchonMainSlider />
      <div className="archon-menu-container">
        <NavLink
          to="/archon/list-teams/create-team"
          className="archon-menu-buttons"
        >
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

      <div className="row-padding-400"></div>

      <h3 className="content-box-main-title">
        <CgData /> LIVE MATCHES
      </h3>
      <div className="recent-live-events">
        <div className="recent-live-event-container">
          <p className="recent-live-data">BRA</p>
          <p className="recent-live-data">vs</p>
          <p className="recent-live-data">ARG</p>
          <div className="recent-live-event-time-container">
            <p>3'44"</p>
          </div>
        </div>
        <div className="recent-live-event-container">
          <p className="recent-live-data">BRA</p>
          <p className="recent-live-data">vs</p>
          <p className="recent-live-data">ARG</p>
          <div className="recent-live-event-time-container">
            <p>3'44"</p>
          </div>
        </div>
        <div className="recent-live-event-container">
          <p className="recent-live-data">BRA</p>
          <p className="recent-live-data">vs</p>
          <p className="recent-live-data">ARG</p>
          <div className="recent-live-event-time-container">
            <p>3'44"</p>
          </div>
        </div>
        <div className="recent-live-event-container">
          <p className="recent-live-data">BRA</p>
          <p className="recent-live-data">vs</p>
          <p className="recent-live-data">ARG</p>
          <div className="recent-live-event-time-container">
            <p>3'44"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchonDashboard;
