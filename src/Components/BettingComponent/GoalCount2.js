import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useInView } from "react-intersection-observer";
import { siteConstant } from "../../Constants/commonConstants";
import { CommonContext } from "../../Context/CommonContext";
import { GiTurban } from "react-icons/gi";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import Football from "./Football";

function GoalCount() {
  const { ref, inView } = useInView({ threshold: siteConstant.THRESHOLD });
  const { dispatchUserEvent } = useContext(CommonContext);
  const modalRef = useRef();
  const [selectedGoalCount, setSelectedGoalCount] = useState(0);
  const [goals, setGoals] = useState([]);

  //*For closing them modal when we click outside
  useEffect(() => {
    window.addEventListener("mousedown", handleModel);

    return () => {
      window.removeEventListener("mousedown", handleModel);
    };
  }, []);

  //*For Creating Array of footballs
  useEffect(() => {
    if (selectedGoalCount > 0) {
      setGoals([]);
      let tempArray = [];
      for (let i = 0; i < selectedGoalCount; i++) tempArray.push(i);
      setGoals(tempArray);
    }
  }, [selectedGoalCount]);

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
        <div className="football-court">
          <div className="football-court-goal-post-top"></div>
          <div className="football-court-middle-line"></div>
          <div className="football-court-middle-circle"></div>
          <div className="football-court-middle-circle-fill"></div>
          <div className="football-court-goal-post-bottom"></div>
          <div className="football-court-grass-img"></div>
          <div className="football-court-players-container"></div>

          {goals?.map((_, index) => {
            if (index === 1) {
              return false;
            } else {
              return <Football key={index} />;
            }
          })}

          <div className={"football-court-goal-selecting-container"}>
            <div className="football-court-goal-selecting-container-sub-1">
              <div className="football-court-goal-selecting-container-sub-2">
                <button
                  className="football-court-goal-state-change-buttons"
                  onClick={() =>
                    setSelectedGoalCount((prev) => {
                      return prev - 1;
                    })
                  }
                >
                  <TiArrowLeftThick className="football-court-goal-button-icon" />
                </button>
                <h1 className="football-court-goal-text">
                  {selectedGoalCount}
                </h1>
                <button
                  className="football-court-goal-state-change-buttons"
                  onClick={() =>
                    setSelectedGoalCount((prev) => {
                      return prev + 1;
                    })
                  }
                >
                  <TiArrowRightThick className="football-court-goal-button-icon" />
                </button>
              </div>
              <div className="football-court-goal-selecting-container-sub-3">
                <button className="football-court-goal-trigger-button">
                  <GiTurban className="football-court-goal-trigger-button-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoalCount;
