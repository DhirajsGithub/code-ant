import React from "react";
import "./loginStyle.css";
import logo from "../../assets/icons/main-icon.svg";


const AiDetectCard: React.FC = () => {
  return (
    <div className="ai-detect-card">
      <div className="ai-detect-row-1">
        <img src={logo} alt="logo" />
        <h1>AI to Detect & Autofix Bad Code</h1>
      </div>
      <div className="ai-detect-row-2">
        <div>
          <h1>30+</h1>
          <p>Language Support</p>
        </div>
        <div>
          <h1>10K+</h1>
          <p>Developers</p>
        </div>
        <div>
          <h1>1000+</h1>
          <p>Hours Saved</p>
        </div>
      </div>
    </div>
  );
};

export default AiDetectCard;
