import React from 'react'
import { RiDeleteBin2Fill, RiRepeat2Line } from "react-icons/ri";
import { useGlobalContext } from '../context';

const TrashNoteThumbnail = ({props}) => {
    const { noteId, noteTitle, noteText, noteDate } = props
    const { handleDeleteNote, handleRestoreNote } = useGlobalContext()
    return (
        <div className="trash-note-thumbnail">
            <button className="delete-note-btn" onClick={() => handleDeleteNote(noteId)} ><RiDeleteBin2Fill /></button>
            <button className="restore-note-btn" onClick={() => handleRestoreNote(noteId)} ><RiRepeat2Line /></button>
            <h1 className="thumbnail-title">{noteTitle}</h1>
            <p className="thumbnail-content">{noteText}</p>
            <p className="thumbnail-date">{noteDate}</p>
        </div>
    )
}

export default TrashNoteThumbnail
