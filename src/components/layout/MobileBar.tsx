import React, { useState } from "react";
import icon from "../../assets/icons/main-icon.svg";
import { IoMenu } from "react-icons/io5";
import "./Sidebar.css";
import NavigationButton from "../sidebar/NavigationButton";
import { TbHome } from "react-icons/tb";

import { IoCodeSlashOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { IoIosCloudOutline } from "react-icons/io";
import { LuBookText } from "react-icons/lu";
import { FiPhone, FiLogOut } from "react-icons/fi";
import RepoNameButton from "../sidebar/RepoNameButton";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const MobileBar: React.FC = () => {
  const navigation = useNavigate()
  const [openMenu, setOpenMenu] = useState(false);
  const handleLogoutClick = () => {
    navigation("/")
  }
  return (
    <div className="mobile-bar-wrapper">
      <div style={{borderBottom: openMenu ? "none" : ""}} className="mobile-bar">
      <div className="header">
        <div className="icon-heading">
          <img src={icon} alt="main icon" />
          <h1>CodeAnt AI</h1>
        </div>
        {!openMenu && <div onClick={() => setOpenMenu(true)} className="icon">
          <IoMenu />
        </div>}
       {openMenu && <div onClick={() => setOpenMenu(false)} className="icon">
          <IoClose />
        </div>}
      </div>

      {openMenu && (
        <div className="mobile-bar-overlay" onClick={() => setOpenMenu(false)}>
          <div className="overlay-content">
          <RepoNameButton name="Dhiraj Borse's Repositories and Projects " />
          <div className="mobile-bar-nav">
            <NavigationButton icon={TbHome} name="Repositories" />
            <NavigationButton icon={IoCodeSlashOutline} name="AI Code Review" />
            <NavigationButton icon={IoIosCloudOutline} name="Cloud Security" />
            <NavigationButton icon={LuBookText} name="How to Use" />
            <NavigationButton icon={GoGear} name="Settings" />
            <NavigationButton icon={FiPhone} name="Support" />
            <NavigationButton onClick={handleLogoutClick} icon={FiLogOut} name="Logout" />
          </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default MobileBar;
