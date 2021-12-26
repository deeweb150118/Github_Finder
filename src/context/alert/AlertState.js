import React, { useReducer } from "react";

import alertContext from "./alertContext";
import AlertReducer from "./alertReducer";

import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //Set alert
  const setAlerts = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT, payload: null });
    }, 3000);
  };

  return (
    <alertContext.Provider
      value={{
        alert: state.alert,
        setAlerts,
      }}
    >
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;
