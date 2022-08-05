import React from "react";
import image1 from "../../../Images/team/argentina.svg";
import image2 from "../../../Images/argentinaTeamLogo.webp";
import image3 from "../../../Images/messi.png";
import { useInView } from "react-intersection-observer";
import { siteConstant } from "../../../Constants/commonConstants";

function EachTeam() {
  const { ref, inView } = useInView({ threshold: siteConstant.THRESHOLD });
  return (
    <div
      className={
        inView ? "animateFadeIn listing-each-teams" : "listing-each-teams"
      }
      ref={ref}
    >
      <div className="listing-round-image-container">
        <img alt="rounded-flag" src={image1} className="listing-round-image" />
      </div>
      <img alt="bigBade" src={image2} className="listing-badge-image" />
      <img alt="playerImage" src={image3} className="listing-player-image" />
      <div className="listing-team-info-container">
        <strong>
          <p>ARGENTINA</p>
        </strong>
        <p>ARG</p>
        <p>INTERNATIONAL</p>
      </div>
    </div>
  );
}

export default EachTeam;
