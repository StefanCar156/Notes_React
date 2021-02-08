import React from 'react'
import { useGlobalContext } from '../context'
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const Note = () => {
    const { handleAddNote, newText, newTitle, setNewText, setNewTitle, isEditingNote, handleGoBack } = useGlobalContext()
    const unclickableBtnStyle = {
        pointerEvents: "none",
        backgroundColor: "rgb(255, 215, 82)"
    }
    const unclickableLinkStyle = {
        userSelect: "none",
        pointerEvents: "none",
        backgroundColor: "rgb(255, 215, 82)"
    }
    return (
        <div className="note">
            <button className="back-btn" onClick={() => handleGoBack()}><BiArrowBack /></button>
            <input type="text" className="note-title" placeholder="Title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
            <div className="note-content">
                <textarea placeholder="Note..." className="note-text" value={newText} onChange={(e) => setNewText(e.target.value)}></textarea>
            </div>
            <Link to="/" style={!newText ? unclickableLinkStyle : null } >
                <button className="add-note-btn" style={!newText ? unclickableBtnStyle : null} onClick={() => handleAddNote()} >{isEditingNote ? 'Save changes' : 'Add note'}</button>
            </Link>
        </div>
    )
}

export default Note
