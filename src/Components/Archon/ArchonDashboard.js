import React from "react";
import { NavLink, Route, useHistory } from "react-router-dom";
import InputBox from "../../Utils/Components/InputBox";
import CreateTeam from "./Teams/CreateTeam";

function ArchonDashboard() {
  const history = useHistory();

  const handleRedirection = (path) => {
    history.push(path);
  };

  return (
    <div>
      <NavLink to="/archon/create-team">Create Team</NavLink>
    </div>
  );
}

export default ArchonDashboard;
