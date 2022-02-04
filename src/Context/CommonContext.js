import React, { createContext, useState } from "react";

export const CommonContext = createContext();

export function CommonProvider(props) {
  const [showGoalCount, setShowGoalCount] = useState(false);

  const dispatchUserEvent = (name, payload) => {
    switch (name) {
      case "ADD SHOW GOAL COUNT":
        setShowGoalCount(true);
        break;
      case "HIDE SHOW GOAL COUNT":
        setShowGoalCount(false);
      default:
        break;
    }
  };

  return (
    <CommonContext.Provider value={{ showGoalCount, dispatchUserEvent }}>
      {props.children}
    </CommonContext.Provider>
  );
}
