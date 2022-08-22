import React from "react";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import RadCo from "../../../Utils/Components/RadCo";

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
            <div>Global Entry fees</div>
            <div className="content-sub-main-data">
              <div className="content-sub-main-data">
                <RadCo
                  list={[25, 50, 75, 100, 125, 150]}
                  userSelectedItem={50}
                />
              </div>
            </div>
          </div>
          <div className="content-sub-box-with-data">
            <div>Suspend All Matches</div>
            <div className="content-sub-main-data">
              <div className="content-sub-main-data">
                <div className="content-sub-box-check-container">
                  <RadCo list={["YES", "NO"]} userSelectedItem={"NO"} />
                </div>
              </div>
            </div>
          </div>

          <div className="content-sub-box-with-data">
            <div>Total Entries in Match</div>
            <div className="content-sub-main-data">
              <RadCo list={[25,50,75,100]} userSelectedItem={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfigIndex;
