import React from "react";
import "./loginStyle.css";
import { COLORS } from "../../assets/styles/colors";

interface SwitchButtonProps {
  isActive?: boolean;
  name: string;
  handleSwitchButton: (name: string) => void;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ isActive, name, handleSwitchButton }) => {
    const styles = {
        backgroundColor: isActive ? COLORS.action : "",
    }
  return (
    <div
      style={styles}
      className="switch-btn"
      onClick={()=>handleSwitchButton(name)}
    >
      <h1 style={{ color: isActive ? COLORS.primary : "" }}>{name}</h1>
    </div>
  );
};

export default SwitchButton;
