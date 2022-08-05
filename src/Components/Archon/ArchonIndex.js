import React from "react";
import { Route } from "react-router-dom";
import ArchonDashboard from "./ArchonDashboard";
import BottomNavigationArchon from "./BottomNavigationArchon";
import ConfigIndex from "./Config/ConfigIndex";
import Live from "./Live/Live";
import CreateMatch from "./Match/CreateMatch";
import ListingMatch from "./Match/ListingMatch";
import CreateTeam from "./Teams/CreateTeam";
import ListingTeams from "./Teams/ListingTeams";

function ArchonIndex() {
  return (
    <div className="archon-main-container">
      <Route path="/archon/dashboard" component={ArchonDashboard} exact />
      <Route
        path={"/archon/list-matches/create-match"}
        component={CreateMatch}
      />
      <Route path={"/archon/list-matches"} component={ListingMatch} exact />
      <Route path={"/archon/list-teams"} component={ListingTeams} exact />
      <Route
        path={"/archon/list-teams/create-team"}
        component={CreateTeam}
        exact
      />
      <Route path={"/archon/live-match"} component={Live} />
      <Route path={"/archon/config"} component={ConfigIndex} />
      <BottomNavigationArchon />
    </div>
  );
}

export default ArchonIndex;
