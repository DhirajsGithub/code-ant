import React from "react";
import "./loginStyle.css";
import loginPageSvg from "../../assets/icons/Subtract.svg";
import IssueFixedCard from "../../components/login/IssueFixedCard";
import AiDetectCard from "../../components/login/AiDetectCard";
import icon from "../../assets/icons/main-icon.svg";
import SwitchButton from "../../components/login/SwitchButton";
import LoginWithButton from "../../components/login/LoginWithButton";
import gitlabSvg from "../../assets/icons/git-lab.svg";
import keySvg from "../../assets/icons/key.svg";
import githubSvg from "../../assets/icons/github.svg"
import azureSvg from "../../assets/icons/azure.svg"
import bitBucketSvg from "../../assets/icons/bit-bucket.svg"

const Login: React.FC = () => {
  const [activeBtn, setActiveBtn] = React.useState("SAAS");
  const handleSwitchButton = (name: string) => {
    setActiveBtn(name);
  };
  const LoginBtns = () => {
    if (activeBtn === "SAAS") {
      return (
        <div className="col-2-content-row-2">
          <LoginWithButton
            icon={<img src={githubSvg} />}
            name="Sign in with Github"
          />
          <LoginWithButton
            icon={<img src={bitBucketSvg} />}
            name="Sign in with Bitbucket"
          />
          <LoginWithButton
            icon={<img src={azureSvg} />}
            name="Sign in with Azure Devops"
          />
          <LoginWithButton
            icon={<img src={gitlabSvg} />}
            name="Sign in with GitLab"
          />
          
          
        </div>
      );
    } else {
      return (
        <div className="col-2-content-row-2">
          <LoginWithButton
            icon={<img src={gitlabSvg} />}
            name="Self Hosted GitLab"
          />
          <LoginWithButton
            icon={<img src={keySvg} />}
            name="Sign in with SSO"
          />
        </div>
      );
    }
  };
  return (
    <div className="login-page">
      <div className="col col-1">
        <div className="col-1-content">
          <div className="ai-detect-div">
            <AiDetectCard />
          </div>
          <div className="issue-fixed-div">
            <IssueFixedCard />
          </div>
        </div>
        <div className="logo-blind">
          <img src={loginPageSvg} alt="" />
        </div>
      </div>
      <div className="col col-2">
        <div className="col-2-content">
          <div className="col-2-content-row-1">
            <div className="col-2-row-1">
              <div className="icon-heading">
                <img src={icon} alt="main icon" />
                <h1>CodeAnt AI</h1>
              </div>
              <h1>Welcome to CodeAnt AI</h1>
            </div>
            <div className="col-2-row-2">
              <SwitchButton
                name="SAAS"
                handleSwitchButton={handleSwitchButton}
                isActive={activeBtn === "SAAS"}
              />
              <SwitchButton
                name="Self Hosted"
                handleSwitchButton={handleSwitchButton}
                isActive={activeBtn === "Self Hosted"}
              />
            </div>
          </div>
          {LoginBtns()}
        </div>
        <div className="col-2-footer">
          <p>By signing up you agree to the <a href="/">Privacy Policy.</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
