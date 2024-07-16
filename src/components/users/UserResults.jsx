import { useEffect, useState } from "react";
import { Spinner } from "../layout/Spinner.jsx";
import { UserItem } from "./UserItem.jsx";

export const UserResults = () => {
  const [users, setUsers] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_API_TOKEN}`,
      },
    });

    const data = await res.json();
    console.log(data);
    setUsers(data);
    setLoading(false);
  };
  if (!Loading) {
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
