import React from "react";
import { GiTurban } from "react-icons/gi";
import { IoIosFootball } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import { siteConstant } from "../../../Constants/commonConstants";
import flag1 from "../../../Images/flag1.jpeg";
import flag2 from "../../../Images/flag2.jpeg";

function Live() {
  const { ref, inView } = useInView({ threshold: siteConstant.THRESHOLD });

  return (
    <div className="live-main-container">
      {/* <div className="live-console-container">
        <div className="live-console-subs">
          <img alt="profile-pics" src={teamA} className="live-team-images" />
        </div>
        <div className="live-console-subs">
          <p>01</p>
        </div>
        <div className="live-console-subs">
          <p>:</p>
        </div>
        <div className="live-console-subs">
          <p>01</p>
        </div>
        <div className="live-console-subs">
          <img alt="profile-pics" src={teamB} className="live-team-images" />
        </div>
        <div className="live-console-subs">
          <p>Argentina</p>
        </div>
        <div className="live-console-subs">
          <p>Portugal</p>
        </div>
        <div className="live-console-subs">
          <p>LIVE</p>
        </div>
        <div className="live-console-subs">
          <p className="gameTitle">
            <IoIosFootball className="smallIcons" />
            Fifa World Cup 2022
          </p>
        </div>
      </div> */}

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
      <div className="live-score-container">
        <button className="football-court-goal-trigger-button">
          <p className="football-court-goal-trigger-button-icon live-score-button-icon">
            cancel
          </p>
        </button>
        <button
          className="football-court-goal-trigger-button"
        >
          {/* <IoIosFootball className="football-court-goal-trigger-button-icon live-score-button-icon" /> */}
          <p className="football-court-goal-trigger-button-icon live-score-button-icon">
            end
          </p>
        </button>
      </div>
    </div>
  );
}

export default Live;
