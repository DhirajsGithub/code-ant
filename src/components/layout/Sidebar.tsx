import React from "react";
import "./Sidebar.css";
import icon from "../../assets/icons/main-icon.svg";
import RepoNameButton from "../sidebar/RepoNameButton";
import PrimaryButton from "../common/PrimaryButton";
import { TbHome } from "react-icons/tb";
import NavigationButton from "../sidebar/NavigationButton";
import { IoCodeSlashOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { IoIosCloudOutline } from "react-icons/io";
import { LuBookText } from "react-icons/lu";
import { FiPhone, FiLogOut } from "react-icons/fi";
import MobileBar from "./MobileBar";
import useWindowSize from "../../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const isMobile = useWindowSize();
  const navigation = useNavigate();
  const handleLogoutClick = () => {
    navigation("/");
  };

  if (isMobile) {
    return <MobileBar />;
  }

  return (
    <div className="sidebar">
      <div className="content">
        <div className="logo-repo-btn">
          <div className="icon-heading">
            <img src={icon} alt="main icon" />
            <h1>CodeAnt AI</h1>
          </div>
          <RepoNameButton name="Dhiraj Borse's Repositories and Projects " />
        </div>
        <div className="navigation">
          <PrimaryButton icon={TbHome} name="Repositories" />
          <NavigationButton icon={IoCodeSlashOutline} name="AI Code Review" />
          <NavigationButton icon={IoIosCloudOutline} name="Cloud Security" />

          <NavigationButton icon={LuBookText} name="How to Use" />
          <NavigationButton icon={GoGear} name="Settings" />
        </div>
      </div>
      <div className="content">
        <div className="navigation">
          <NavigationButton icon={FiPhone} name="Support" />
          <NavigationButton
            onClick={handleLogoutClick}
            icon={FiLogOut}
            name="Logout"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
