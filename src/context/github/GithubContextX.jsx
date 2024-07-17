import { createContext, useReducer } from "react";
import { GithubReducer } from "./GithubReducerX.jsx";

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const intitialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, intitialState);

  // Get initial users (testing purposes)
  // const fetchUsers = async () => {
  //   setLoading();
  //   const res = await fetch(`${API_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${API_TOKEN}`,
  //     },
  //   });

  //   const data = await res.json();
  //   console.log(data);

  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data,
  //   });
  // };

  // Set loading
  // const setLoading = () => dispatch({ type: "SET_LOADING" });

  // Clear Users
  // const clearUsers = () => dispatch({ type: "CLEAR_USERS" });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
