import React, { useContext, useEffect } from "react";
import "./Styles/style.css";
import "./Styles/mediaQueries.css";
import { textConstants } from "./Constants/textConstants";
import NavBar from "./Components/NavComponents/NavBar";
import { Route, useHistory } from "react-router-dom";
import BettingComponent from "./Components/BettingComponent/Index";
import Login from "./Components/Login/Login";
import Home from "./Components/HomeComponent/Index";
import SettingsIndex from "./Components/Settings/SettingsIndex";
import { CommonContext } from "./Context/CommonContext";
import ArchonIndex from "./Components/Archon/ArchonIndex";

const App = () => {
  const { auth } = useContext(CommonContext);
  const history = useHistory();

  window.addEventListener("offline", () => {
    //* When we go offline
  });

  window.addEventListener("online", () => {
    //* Back to online
  });

  useEffect(() => {
    document.getElementById("loadingScreen").style.display = "none";
  }, []);

  useEffect(() => {
    console.log("Path Name", window.location.pathname);
    if (window.location.pathname === "/") {
      if (localStorage.getItem("userId")) {
        history.push("/home");
      } else {
        history.push("/login");
      }
    }
  }, [auth, history]);

  return (
    <div className="App">
      <div style={{ paddingBottom: !auth && "0" }} className="contentBox">
        {auth ? (
          <>
            <NavBar />
            <Route path="/betting" component={BettingComponent} />
            <Route path="/home" component={Home} />
            <Route path="/settings" component={SettingsIndex} />
            <Route path="/archon" component={ArchonIndex} />
          </>
        ) : (
          <Route path="/login" component={Login} exact />
        )}
      </div>
      <p className="errorMessage">{textConstants.ONLY_MOBILE_VIEW}</p>
    </div>
  );
};

export default App;
