import { useState, useContext } from "react";
import { GithubContext } from "../../context/github/GithubContextX.jsx";
import { AlertContext } from "../../context/alert/AlertContext.jsx";
import { searchUsers } from "../../context/github/GithubActions.jsx";

export const UserSearch = () => {
  const [term, setTerm] = useState("");

  const { users, dispatch } = useContext(GithubContext);

  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (term === "") {
      setAlert("Please enter something", "error");
    } else {
      dispatch({ type: "SET_LOADING" });
      const users = await searchUsers(term);
      dispatch({ type: "GET_USERS", payload: users });
      setTerm("");
    }
  };

  const handleClear = () => {
    // clearUsers();
    dispatch({ type: "CLEAR_USERS" });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={term}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* ONLY SHOW CLEAR BUTTON WHEN THERE ARE USERS ON STATE */}
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={handleClear}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};
