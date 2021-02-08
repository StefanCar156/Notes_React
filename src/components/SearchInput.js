import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useGlobalContext } from '../context'

const SearchInput = () => {
    const { searchValue, setSearchValue } = useGlobalContext()
    return (
            <div className="search-container">
                <button className="search-btn"><AiOutlineSearch /></button>
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search notes"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    />
            </div>
    )
}

export default SearchInput
