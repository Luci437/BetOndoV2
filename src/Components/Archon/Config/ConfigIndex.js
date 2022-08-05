import React from "react";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function ConfigIndex() {
  return (
    <div className="listing-main-container">
      <div className="listing-title-container">
        <h3 className="forms-title">Configurations</h3>
        <NavLink
          to="/archon/list-matches/create-match"
          className="archon-menu-buttons"
        >
          <IoSettingsSharp className="archon-menu-icon" />
          Update Config
        </NavLink>
      </div>

      <div className="row-padding-800"></div>

      <div className={"content-box-with-main-title"}>
        <h3 className="content-box-main-title">
          <IoSettingsOutline /> Information about site
        </h3>
        <div className="content-box-with-data">
          <div className="content-sub-box-with-data">
            <div>Match</div>
            <div className="content-sub-main-data">Fifa World Cup 2022</div>
          </div>
          <div className="content-sub-box-with-data">
            <div>Match</div>
            <div className="content-sub-main-data">Fifa World Cup 2022</div>
          </div>
          <div className="content-sub-box-with-data">
            <div>Match</div>
            <div className="content-sub-main-data">Fifa World Cup 2022</div>
          </div>
          <div className="content-sub-box-with-data">
            <div>Match</div>
            <div className="content-sub-main-data">Fifa World Cup 2022</div>
          </div>
          <div className="content-sub-box-with-data">
            <div>Match</div>
            <div className="content-sub-main-data">Fifa World Cup 2022</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfigIndex;
