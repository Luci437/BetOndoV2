import React, { createContext, useReducer } from "react";
import Toast from "./Toast";

export const ToastContext = createContext();

function ToastProvider(props) {

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "CREATE_NOTIFICATION":
        return [...state, { ...action.payload }];
      case "REMOVE_NOTIFICATION":
        return state.filter((note) => note.id !== action.id);
      default:
        return state;
    }
  }, []);

  return (
    <ToastContext.Provider>
      {state?.map((note) => (
        <Toast dispatch={dispatch} key={note.id} {...note} />
      ))}
      {props.children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
