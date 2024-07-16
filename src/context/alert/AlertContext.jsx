import { createContext, useReducer } from "react";
import { AlertReducer } from "./AlertReducer.jsx";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  // set alert initialState to null and set a object with message
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // set an alert
  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });

    setTimeout(
      () =>
        dispatch({
          type: "REMOVE_ALERT",
        }),
      3000,
    );
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
