import React from 'react'
import "./loginStyle.css"
import { useNavigate } from 'react-router-dom';

interface LoginWithButtonProps {
  name: string;
  icon: JSX.Element;
}

const LoginWithButton:React.FC<LoginWithButtonProps> = ({name, icon }) => {
  const navigation = useNavigate();
  const handleOnClick = ()=>{
    navigation("/dashboard")
  }
  return (
    <div onClick={handleOnClick} className='logi-with-btn'>
      <div>
         {icon}
      </div>
      <h1>{name}</h1>
    </div>
  )
}

export default LoginWithButton