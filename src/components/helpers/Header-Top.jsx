import React,{useState} from 'react'
import { Link } from "react-router-dom"

function HeaderTop({ search }) {
    const [isPop, setPop]= useState(false)
    
    const onChange = (event) => {
        if (!event.target.value || event.target.value === "") {
            return ''
        }
        search(event.target.value)
    }

    const handleClick = () => {
        {isPop? setPop(false):setPop(true)}
    }

    return (
        <React.Fragment>
        <div className="flex relative p-4 lg:justify-between" id="header__top p-4 ">

        <Link to="/home">
            <img src="/images/logo-un.png" alt="logo" className="w-10 h-10 mr-4"/>
        </Link>
        
        
        <div className=" flex p-2 w-4/5 bg-gray-100 rounded-3xl focus:border border-2 border-gray-200 mr-2" id="search">

            <svg className="w-6 h-6 text-gray-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input type="search" onChange={onChange} id="search-bar" className="ml-2 bg-transparent text-gray-700 w-full " placeholder="Search free high resolution photos"/>

        </div>

        <Link to="/home" id="home" className="hidden md:block relative font-bold top-2">
                Home
        </Link>    
            {/*User Icon*/}
                <div id="user" onClick={handleClick} className="hidden cursor-pointer sm:block bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 w-10 h-10 rounded-full  "></div>   
            </div>
            {/*Popup*/}
            {isPop? <PopupProfile/>: null}
            
        </React.Fragment>
    )
}

export default HeaderTop

function PopupProfile() {

    const logout = () => {
        sessionStorage.removeItem('token')

    }
    
    return (
        <div class=" dropdown-popup  z-30 origin-top-right transform -translate-y-4 absolute right-4 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</Link>
                            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</Link>
                            <Link to="/connexion" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={logout}>Log out</Link>
    </div>
    )
    
}
