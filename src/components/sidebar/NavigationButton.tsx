import React from "react";
import "./sidebarCompStyle.css";

interface NavigationButtonInterface {
  icon: React.FC;
  name: string;
}

const NavigationButton: React.FC<NavigationButtonInterface> = ({
  icon: Icon,
  name,
}) => {
  return (
    <div className="navigationBtn">
      <div>
        <Icon />
      </div>
      <h1>{name}</h1>
    </div>
  );
};

export default NavigationButton;
