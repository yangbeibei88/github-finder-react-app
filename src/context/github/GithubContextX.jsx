import { createContext, useState } from "react";
import { API_URL, API_TOKEN } from "../../utils.jsx";

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const res = await fetch(`${API_URL}/users`, {
      headers: {
        Authorization: `token ${API_TOKEN}`,
      },
    });

    const data = await res.json();
    console.log(data);
    setUsers(data);
    setLoading(false);
  };

  return (
    <GithubContext.Provider
      value={{
        users,
        loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
