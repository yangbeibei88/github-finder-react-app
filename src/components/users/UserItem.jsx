import { Link } from "react-router-dom";

export const UserItem = ({ name, avatar }) => {
  return (
    <div className="card shadow-md compact side bg-base-300">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar} alt={name} />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{name}</h2>
          <Link to={`/users/${name}`} className="text-base-content">
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};
