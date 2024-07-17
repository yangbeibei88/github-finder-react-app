import { API_TOKEN, API_URL } from "../../utils.jsx";

// Search Users
export const searchUsers = async (term) => {
  const params = new URLSearchParams({
    q: term,
  });
  console.log(params);
  const res = await fetch(`${API_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${API_TOKEN}`,
    },
  });

  const { items } = await res.json();

  return items;
};
