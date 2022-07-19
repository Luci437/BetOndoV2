import React from "react";
import { Route } from "react-router-dom";
import ArchonDashboard from "./ArchonDashboard";
import CreateMatch from "./Match/CreateMatch";
import CreateTeam from "./Teams/CreateTeam";

function ArchonIndex() {
  return (
    <div className="archon-main-container">
      <Route path="/archon/dashboard" component={ArchonDashboard} exact />
      <Route path={"/archon/create-team"} component={CreateTeam} />
      <Route path={"/archon/create-match"} component={CreateMatch} />
    </div>
  );
}

export default ArchonIndex;
