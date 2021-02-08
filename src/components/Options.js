import React from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
 
const Options = () => {
    const linkStyle = {
        color: "#000",
        textDecoration: "none"
    }
    const { layout, handleChangeLayout , isOptionsActive, setIsOptionsActive, isTrashOpen } = useGlobalContext()
    return (
        <ul className={`options-container ${isOptionsActive && `options-container-active`}`}>
            <li onClick={() => handleChangeLayout()}>Show {layout === 'grid' ? `list` : `grid`}</li>
            <Link to={`${isTrashOpen ? `/` : `/trash`}`} style={linkStyle} onClick={() => setIsOptionsActive(false)} >
                <li>{isTrashOpen ? 'Notes' : 'Trash' }</li>
            </Link>
        </ul>
    )
}

export default Options
