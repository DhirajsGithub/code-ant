import React from "react";
import { Repository } from "../../types/repositoryTypes";
import RepositoryCard from "../../components/dashboard/RepositoryCard";

interface RepositoriesListInterface {
  repos: Repository[];
}

const RepositoriesList: React.FC<RepositoriesListInterface> = ({ repos }) => {
  if(repos.length === 0){
    return <div className="no-repos-found">
      <h1>No repositories found</h1>
    </div>
  }
  return (
    <div>
      {repos.map((repo) => {
        return <RepositoryCard repo={repo} key={repo.id} />;
      })}
    </div>
  );
};

export default RepositoriesList;
