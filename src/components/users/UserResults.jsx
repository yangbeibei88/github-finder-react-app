import { useContext, useEffect } from "react";
import { Spinner } from "../layout/Spinner.jsx";
import { UserItem } from "./UserItem.jsx";
import { GithubContext } from "../../context/github/GithubContextX.jsx";

export const UserResults = () => {
  const { users, loading, fetchUsers } = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();
  });

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((user) => (
          <UserItem key={user.id} name={user.login} avatar={user.avatar_url} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};
