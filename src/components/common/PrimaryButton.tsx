import React from "react";
import "./commonStyle.css";

interface PrimaryButtonProps {
  icon: React.FC;
  name: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ icon: Icon, name }) => {
  return (
    <div className="primaryBtn">
      <div>
        <Icon />
      </div>
      <h1>{name}</h1>
    </div>
  );
};

export default PrimaryButton;
