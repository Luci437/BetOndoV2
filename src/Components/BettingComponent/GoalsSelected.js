import React from "react";
import { useInView } from "react-intersection-observer";
import { siteConstant } from "../../Constants/commonConstants";

function GoalsSelected() {
  const { ref, inView } = useInView({ threshold: siteConstant.THRESHOLD });
  return (
    <div
      ref={ref}
      className={
        inView ? "animateFadeIn participantsContainer" : "participantsContainer"
      }
    >
      <span className="subHeading">
        <p>Goals Selected</p>
        <span className="totalParticipantsCount">
          <p className="currentNumber">05</p>
          <p className="totalNumber">10</p>
        </span>
      </span>
      <div className="participantsTable">
        
      </div>
    </div>
  );
}

export default GoalsSelected;
