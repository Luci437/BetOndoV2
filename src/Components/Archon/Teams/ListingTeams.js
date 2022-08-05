import React from "react";
import { GiAmericanFootballPlayer } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import EachTeam from "./EachTeam";

function ListingTeams() {
  return (
    <div className="listing-main-container">
      <div className="listing-title-container">
        <h3 className="forms-title">Listing Match</h3>
        <NavLink
          to="/archon/list-teams/create-team"
          className="archon-menu-buttons"
        >
          <GiAmericanFootballPlayer className="archon-menu-icon" />
          CREATE TEAM
        </NavLink>
      </div>
      <div className="row-padding-800"></div>
      <div className="listing-team-main-container">
        {[1, 2, 4, 4, 1, 2, 3, 23, 3, 23, 23].map(() => (
          <EachTeam />
        ))}
      </div>
    </div>
  );
}

export default ListingTeams;
