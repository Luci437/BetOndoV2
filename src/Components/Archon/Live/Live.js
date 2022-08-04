import React, { useState } from "react";
import { GiTurban } from "react-icons/gi";
import { IoIosFootball } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import { siteConstant } from "../../../Constants/commonConstants";
import flag1 from "../../../Images/flag1.jpeg";
import flag2 from "../../../Images/flag2.jpeg";
import { BiTrendingUp, BiToggleLeft } from "react-icons/bi";
import { CgData } from "react-icons/cg";
import GoalLiveCounter from "./GoalLiveCounter";
import { BsViewList } from "react-icons/bs";
import { AiOutlineControl } from "react-icons/ai";

function Live() {
  const { ref, inView } = useInView({ threshold: siteConstant.THRESHOLD });
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

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
        <p className="live-container-live-text">LIVE</p>
        <div className="archon-vs-box">
          <img alt="flags" src={flag1} className="archon-vs-flags" />
        </div>
        <div className="archon-vs-box">
          <img alt="flags" src={flag2} className="archon-vs-flags" />
        </div>
        <div className="archon-vs-info-container">
          <p className="archon-vs-info-text">AGN</p>
          <p className="archon-vs-info-text">
            {teamAScore < 10 ? `0${teamAScore}` : teamAScore}
          </p>
          <p className="archon-vs-info-text">:</p>
          <p className="archon-vs-info-text">
            {teamBScore < 10 ? `0${teamBScore}` : teamBScore}
          </p>
          <p className="archon-vs-info-text">PKN</p>
          <div className="archon-vs-info-timer-container">
            <p>2'33"</p>
          </div>
        </div>
      </div>

      <div className="row-padding-800"></div>
      <div className="row-padding-800"></div>

      <p className="gameTitle">
        <AiOutlineControl className="smallIcons" /> Match Controller
      </p>

      <div className="live-counter-main-container">
        <GoalLiveCounter setFunction={setTeamAScore} />
        <GoalLiveCounter setFunction={setTeamBScore} />
      </div>

      <div className="content-box-with-main-title">
        <h3 className="content-box-main-title">
          <BiToggleLeft /> MATCH DYNAMO
        </h3>
        <div className="content-box-with-data">
          <div className="content-sub-box-with-data">
            <div>Match Status</div>
            <div className="content-sub-main-data">
              <div className="content-sub-box-check-container">
                <button className="content-sub-box-check-button">
                  Started
                </button>
                <button className="content-sub-box-check-button">Break</button>
                <button className="content-sub-box-check-button">
                  Extra Time
                </button>
                <button className="content-sub-box-check-button">Ended</button>
              </div>
            </div>
          </div>
          <div className="content-sub-box-with-data">
            <div>Match Abandoned</div>
            <div className="content-sub-main-data">
              <div className="content-sub-box-check-container">
                <button className="content-sub-box-check-button">Yes</button>
                <button className="content-sub-box-check-button">No</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-box-with-main-title">
        <h3 className="content-box-main-title">
          <BiTrendingUp /> MATCH INFORMATION
        </h3>
        <div className="content-box-with-data">
          <div className="content-sub-box-with-data">
            <div>Match</div>
            <div className="content-sub-main-data">Fifa World Cup 2022</div>
          </div>
          <div className="content-sub-box-with-data">
            <div>Match ID</div>
            <div className="content-sub-main-data">#19201291029120</div>
          </div>
          <div className="content-sub-box-with-data">
            <div>All Entries</div>
            <div className="content-sub-main-data">47</div>
          </div>
          <div className="content-sub-box-with-data">
            <div>Prize Pool</div>
            <div className="content-sub-main-data">50</div>
          </div>
          <div className="content-sub-box-with-data">
            <div>Coins Collected</div>
            <div className="content-sub-main-data">1200</div>
          </div>
          <div className="content-sub-box-with-data">
            <div>DeadLine</div>
            <div className="content-sub-main-data">12, March 2022</div>
          </div>
        </div>
      </div>
      {/* <div className="row-padding-400"></div>
      <div className="row-padding-800"></div> */}
      <h3 className="content-box-main-title">
        <CgData /> OTHER LIVE MATCHES
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
      {/* <div className="live-score-container">
        <button className="football-court-goal-trigger-button">
          <p className="football-court-goal-trigger-button-icon live-score-button-icon">
            cancel
          </p>
        </button>
        <button className="football-court-goal-trigger-button">
          <IoIosFootball className="football-court-goal-trigger-button-icon live-score-button-icon" />
          <p className="football-court-goal-trigger-button-icon live-score-button-icon">
            end
          </p>
        </button>
      </div> */}
    </div>
  );
}

export default Live;
