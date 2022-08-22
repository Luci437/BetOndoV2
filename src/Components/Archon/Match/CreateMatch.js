import React from "react";
import { IoMdClose } from "react-icons/io";
import DropDown from "../../../Utils/Components/DropDown";
import InputBox from "../../../Utils/Components/InputBox";
import { SiEpicgames } from "react-icons/si";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateMatch() {

  const [matchList] = useState(["Fifa World Cup 2022", "UEFA Champions 2022"]);
  const history = useHistory();

  return (
    <div className="form-main-container">
      <h3 className="form-main-title">
        <SiEpicgames /> SCHEDULE MATCH
      </h3>
      <div className="horizontal-padding-large"></div>
      <div className="schedule-form-main-container">
        <div className="schedule-form-team-main-container">
          <div className="schedule-form-team-sub-containers"></div>
          <div className="schedule-form-team-sub-containers">
            <h3>VS</h3>
          </div>
          <div className="schedule-form-team-sub-containers"></div>
          <div className="schedule-form-team-sub-containers"></div>
          <div className="schedule-form-team-sub-containers"></div>
          <div className="schedule-form-team-sub-containers"></div>
        </div>
        <div className="horizontal-padding-large"></div>
        <div className="schedule-data-container">
          <span className="schedule-data-sub-containers">
            <p className="forms-title">TEAM A</p>
            <DropDown />
          </span>
          <span className="schedule-data-sub-containers">
            <p className="forms-title">TEAM B</p>
            <DropDown />
          </span>
          <span className="schedule-data-sub-containers">
            <p className="forms-title">MATCH NAME</p>
            <DropDown list={matchList} />
          </span>
          <span className="schedule-data-sub-containers">
            <p className="forms-title">MATCH DAY</p>
            <InputBox type="date" />
          </span>
          <span className="schedule-data-sub-containers">
            <p className="forms-title">ENTRY DEAD TIME</p>
            <InputBox type="datetime-local" />
          </span>
        </div>
      </div>
      <div className="horizontal-padding-large"></div>
      <div className="submission-area">
        <button className="sub-button sub-cancel-button" onClick={()=> history.goBack()}>
          <IoMdClose />
        </button>
        <button className="sub-button sub-continue-button">save info</button>
      </div>
    </div>
  );
}

export default CreateMatch;
