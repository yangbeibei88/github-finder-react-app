import { useEffect, useState } from "react";

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
    setUsers(data);
    setLoading(false);
  };
  if (!Loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg: grid-cols-3 md: grid-cols-2">
        {users.map((user) => (
          <div className="" key={user.id}>
            <h3 className="">{user.login}</h3>
            <img src={user.avatar_url} alt={user.id} />
          </div>
        ))}
      </div>
    );
  } else {
    return <h3>Loading...</h3>;
  }
};
