import { createContext, useReducer } from "react";
import { GithubReducer } from "./GithubReducerX.jsx";
import { API_URL, API_TOKEN } from "../../utils.jsx";

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
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  // Clear Users
  const clearUsers = () => dispatch({ type: "CLEAR_USERS" });

  // Get single user profile
  const getUser = async (login) => {
    setLoading();

    const res = await fetch(`${API_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${API_TOKEN}`,
      },
    });

    if (res.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await res.json();
      console.log(data);

      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  // Get user Repos
  const getUserRepos = async (login) => {
    setLoading();

    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });

    const res = await fetch(`${API_URL}/users/${login}/repos?${params}`, {
      headers: {
        Authorization: `token ${API_TOKEN}`,
      },
    });

    const data = await res.json();
    console.log(data);

    dispatch({
      type: "GET_USER_REPOS",
      payload: data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
