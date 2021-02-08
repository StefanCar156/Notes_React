import React from 'react'
import SearchInput from './SearchInput'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { IoClose } from 'react-icons/io5'
import Options from './Options'
import { useGlobalContext } from '../context'

const Navbar = () => {
    const { isOptionsActive,setIsOptionsActive } = useGlobalContext()
    return (
        <nav className="navbar">
            <SearchInput />
            <button className="nav-options-btn" onClick={() => setIsOptionsActive(!isOptionsActive)}>{isOptionsActive ? <IoClose /> : <BiDotsVerticalRounded /> }</button>
            <Options />
        </nav>
    )
}

export default Navbar
