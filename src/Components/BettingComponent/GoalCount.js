import React, { useContext, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { siteConstant } from "../../Constants/commonConstants";
import { CommonContext } from "../../Context/CommonContext";

function GoalCount() {
  const { ref, inView } = useInView({ threshold: siteConstant.THRESHOLD });
  const { dispatchUserEvent } = useContext(CommonContext);
  const modalRef = useRef();
  const [selectedGoalCount, setSelectedGoalCount] = useState(-1);

  //*For closing them modal when we click outside
  useEffect(() => {
    window.addEventListener("mousedown", handleModel);

    return () => {
      window.removeEventListener("mousedown", handleModel);
    };
  }, []);

  //*For closing modal
  const handleModel = (e) => {
    if (modalRef?.current?.contains(e.target)) {
      return true;
    }
    dispatchUserEvent("HIDE SHOW GOAL COUNT");
  };

  return (
    <div className="goal-count-main-container">
      <div className="goal-count-container" ref={modalRef}>
        <span className="subHeading" ref={ref}>
          <p>Choose Goals</p>
          <span className="totalParticipantsCount">
            <p className="currentNumber">01</p>
            <p className="totalNumber">31</p>
          </span>
        </span>
        <div className="goal-count-grid">
          {siteConstant.GOAL_COUNT.map((GOALS, index) => (
            <button
              className={
                inView
                  ? "animateFadeIn profileMenuIcons profileMenuIconsGoal"
                  : "profileMenuIcons profileMenuIconsGoal"
              }
              onClick={() => setSelectedGoalCount(index)}
            >
              {index}
            </button>
          ))}
        </div>

        <button
          className={
            selectedGoalCount >= 0
              ? "goal-count-bet-button"
              : "goal-count-bet-button-disabled"
          }
        >
          I BET {selectedGoalCount >= 0 && selectedGoalCount} GOALS
        </button>
      </div>
    </div>
  );
}

export default GoalCount;
