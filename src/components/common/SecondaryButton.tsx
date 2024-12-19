import React from "react";
import "./commonStyle.css";

interface PrimaryButtonProps {
  icon: React.FC;
  name: string;
}

const SecondaryButton: React.FC<PrimaryButtonProps> = ({ icon: Icon, name }) => {
  return (
    <div className="sec-btn">
      <div>
        <Icon />
      </div>
      <h1>{name}</h1>
    </div>
  );
};

export default SecondaryButton;
