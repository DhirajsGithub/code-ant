import React from 'react'
import "./loginStyle.css"
import issuseSvg from "../../assets/icons/Group 4.svg"
import { FaArrowUp } from "react-icons/fa6";



const IssueFixedCard:React.FC = () => {
  return (
    <div className='issue-card'>
      <div className='issue-card-row-1'>
        <div>
          <img src={issuseSvg} alt="" />
        </div>
        <div>
          <div className='issue-card-growth'>
            <FaArrowUp />
          <h3>14%</h3>
          </div>
          <p>This week</p>
        </div>
      </div>
      <div className='issue-card-row-2'>
        <h2>Issues Fixed</h2>
        <h1>500K+</h1>
      </div>
    </div>
  )
}

export default IssueFixedCard