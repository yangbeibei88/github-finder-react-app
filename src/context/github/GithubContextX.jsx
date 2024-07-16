import { createContext, useReducer } from "react";
import { GithubReducer } from "./GithubReducerX.jsx";
import { API_URL, API_TOKEN } from "../../utils.jsx";

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const intitialState = {
    users: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(GithubReducer, intitialState);

  const fetchUsers = async () => {
    const res = await fetch(`${API_URL}/users`, {
      headers: {
        Authorization: `token ${API_TOKEN}`,
      },
    });

    const data = await res.json();
    console.log(data);

    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
