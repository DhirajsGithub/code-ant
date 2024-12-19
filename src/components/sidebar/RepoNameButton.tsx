import React from 'react'
import "./sidebarCompStyle.css"
import { GoChevronDown } from "react-icons/go";

interface RepoNameButtonInterface{
    name: string
}

const RepoNameButton: React.FC<RepoNameButtonInterface> = ({name}) => {
  return (
    <div className='repoNameButton'>
        <h1>{name}</h1>
        <div>
        <GoChevronDown size={20} />
        </div>
    </div>
  )
}

export default RepoNameButton