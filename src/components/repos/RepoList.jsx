import { RepoItem } from "./RepoItem.jsx";

export const RepoList = ({ repos }) => {
  return (
    <div className="rounded-lg shadow-lg card bg-base-300">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Repositories
        </h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};
