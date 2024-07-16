import { UserResults } from "../components/users/UserResults.jsx";
import { UserSearch } from "../components/users/UserSearch.jsx";

export const Home = () => {
  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  );
};
