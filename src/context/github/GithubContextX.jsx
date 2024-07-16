import { createContext, useReducer } from "react";
import { GithubReducer } from "./GithubReducerX.jsx";
import { API_URL, API_TOKEN } from "../../utils.jsx";

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const intitialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, intitialState);

  // Get initial users (testing purposes)
  const fetchUsers = async () => {
    setLoading();
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

  // Set loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

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
