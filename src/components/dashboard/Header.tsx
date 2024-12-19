import React from 'react'
import "./dashboardCompStyle.css"
import PrimaryButton from '../common/PrimaryButton'
import { IoMdAdd } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import SecondaryButton from '../common/SecondaryButton';
import { LuRefreshCw } from "react-icons/lu";

interface HeaderInterface{
  handleSearchRepoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header:React.FC<HeaderInterface> = ({handleSearchRepoChange}) => {
  return (
    <div className='dash-content-header'>
        <div className='dash-content-header-row'>
        <div className='repo-meta'>
            <h1>Repositories</h1>
            <p>33 total repositories</p>
        </div>
        <div className='header-btns'>
            <SecondaryButton icon={LuRefreshCw} name='Refresh' />

            <div className='primary-btn'>
            <PrimaryButton icon={IoMdAdd} name='Add Repository' />
            </div>
        </div>
        </div>
        <div className='input-search'>
            <IoSearchOutline className='search-icon' />
            <input onChange={handleSearchRepoChange} type="text" placeholder='Search Repositories' />
        </div>
    </div>
  )
}

export default Header