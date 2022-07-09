import React from "react";
import { Route } from "react-router-dom";
import ArchonDashboard from "./ArchonDashboard";
import CreateTeam from "./Teams/CreateTeam";

function ArchonIndex() {
  return (
    <div className="archon-main-container">
      <Route path="/archon/dashboard" component={ArchonDashboard} exact />
      <Route path={"/archon/create-team"} component={CreateTeam} />
    </div>
  );
}

export default ArchonIndex;
