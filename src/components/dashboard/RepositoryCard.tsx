import React from "react";
import "./dashboardCompStyle.css";
import { GoDotFill } from "react-icons/go";
import { GoDatabase } from "react-icons/go";
import { COLORS } from "../../assets/styles/colors";
import { Repository } from "../../types/repositoryTypes";
import { daysFromDate } from "../../utils/daysFromDate";

interface StatusCardInterface {
    status: string;
}
const StatusCard: React.FC<StatusCardInterface> = ({status}) => {
  return (
    <div className="status-card">
      <p>{status}</p>
    </div>
  );
};
interface RepositoryCardInterface {
    repo: Repository;
}
const RepositoryCard: React.FC<RepositoryCardInterface> = ({repo}) => {
  return (
    <div className="repo-card">
      <div className="repo-name-status">
        <h1>{repo.name}</h1>
        <StatusCard status={repo.access} />
      </div>
      <div className="repo-meta-details">
        <div className="repo-lang">
          <p>{repo.language}</p>
          <GoDotFill />
        </div>
        <div className="repo-lang">
          <GoDatabase color={COLORS.textPrimary} />
          <p>{repo.size}</p>
        </div>
        <div className="repo-lang">
          <p>Updated {daysFromDate(repo.updated_date)} day ago</p>
        </div>
      </div>
    </div>
  );
};

export default RepositoryCard;
