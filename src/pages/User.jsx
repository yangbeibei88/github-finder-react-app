import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GithubContext } from "../context/github/GithubContextX.jsx";

export const User = () => {
  const { getUser, user } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  return <div className="">{user.login}</div>;
};
