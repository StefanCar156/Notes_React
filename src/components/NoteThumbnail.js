import React from 'react'
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useGlobalContext } from '../context';
import { Link } from "react-router-dom";

const NoteThumbnail = ({props}) => {
    const { noteId, noteTitle, noteText, noteDate } = props
    const { handleRemoveNote, handleEditNote } = useGlobalContext()
    const linkStyle = {
        textDecoration: "none",
        color: "#000"
    }
    return (
        <div className="note-thumbnail">
                <button className="remove-note-btn" onClick={() => handleRemoveNote(noteId)} ><RiDeleteBin2Fill /></button>
                <Link to="/note" style={linkStyle} onClick={() => handleEditNote(noteId, noteTitle, noteText)}>
                    <h1 className="thumbnail-title">{noteTitle}</h1>
                    <p className="thumbnail-content">{noteText}</p>
                    <p className="thumbnail-date">{noteDate}</p>
                </Link>
            </div>
    )
}

export default NoteThumbnail
