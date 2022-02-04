import React, { createContext, useState } from "react";
import { textConstants } from "../Constants/textConstants";

export const TimerContext = createContext();

export function TimerProvider(props) {
  const [expired, setExpired] = useState(false);
  const [todaysGame, setTodaysGame] = useState(textConstants.TODAYS_MATCH);
  const [gameEnded, setGameEnded] = useState(false);
  const [joined, setJoined] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showNav, setShowNav] = useState(false);
  return (
    <TimerContext.Provider
      value={{
        value1: [expired, setExpired],
        value2: [todaysGame, setTodaysGame],
        value3: [gameEnded, setGameEnded],
        value4: [joined, setJoined],
        toastView: [showToast, setShowToast],
        toastInfo: [toastMessage, setToastMessage],
        nav: [showNav, setShowNav],
      }}
    >
      {props.children}
    </TimerContext.Provider>
  );
}
