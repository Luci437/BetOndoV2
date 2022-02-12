import React, { createContext, useEffect, useState } from "react";

export const CommonContext = createContext();

export function CommonProvider(props) {
  const [showGoalCount, setShowGoalCount] = useState(false);
  const [auth, setAuth] = useState(null);


  //*For Adding Default values
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      setAuth(true)
    }
  },[])


  const dispatchUserEvent = (name, payload) => {
    switch (name) {
      case "ADD SHOW GOAL COUNT":
        setShowGoalCount(true);
        break;
      case "HIDE SHOW GOAL COUNT":
        setShowGoalCount(false);
        break;
      case "ADD AUTH":
        setAuth(payload.value)
        break;
      case "REMOVE AUTH":
        setAuth(null);
        break;
      default:
        break;
    }
  };

  return (
    <CommonContext.Provider value={{ showGoalCount, dispatchUserEvent, auth }}>
      {props.children}
    </CommonContext.Provider>
  );
}
