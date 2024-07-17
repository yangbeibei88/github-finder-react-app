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

// Get single user profile
export const getUser = async (login) => {
  const res = await fetch(`${API_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${API_TOKEN}`,
    },
  });

  if (res.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await res.json();

    return data;
  }
};

// Get user Repos
export const getUserRepos = async (login) => {
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

  return data;
};
