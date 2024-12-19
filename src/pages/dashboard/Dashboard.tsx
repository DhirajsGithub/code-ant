import React, { useState, useMemo, useCallback } from "react";
import Sidebar from "../../components/layout/Sidebar";
import "./dashboardStyle.css";
import Header from "../../components/dashboard/Header";
import RepositoriesList from "./RepositoriesList";
import repodata from "../../assets/data/repos.json";
import { Repository } from "../../types/repositoryTypes";
import { debounce } from "../../utils/debounce";

const Dashboard: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [originalRepos] = useState<Repository[]>(repodata.repositories);

  const filteredRepos = useMemo(() => {
    return originalRepos.filter((repo) =>
      repo.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, originalRepos]);

  const handleSearchRepoChange = useCallback(
    debounce((value: string) => {
      setSearch(value);
    }, 500),
    []
  );

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <div className="inner-content">
          <Header
            handleSearchRepoChange={(e) =>
              handleSearchRepoChange(e.target.value)
            }
          />
          <RepositoriesList repos={filteredRepos} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
