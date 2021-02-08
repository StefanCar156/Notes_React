import React, { useEffect } from 'react'
import NoteThumbnail from './NoteThumbnail'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

const NotesContainer = () => {
    const { layout, notes, setIsTrashOpen, searchValue } = useGlobalContext()
    useEffect(() => {
        setIsTrashOpen(false)
    }, [])

    let filteredNotesArray = notes

    if (notes.length === 0) {
        return <>
            <p className="no-notes-notification">No notes.</p>
            <Link to="/note">
                <button className="open-new-note-btn"><AiFillPlusCircle /></button>
            </Link>
        </>
    }
    if (searchValue !== "") {
        filteredNotesArray = notes.filter((note) => note.noteTitle.toLowerCase().includes(searchValue.toLowerCase()) || note.noteText.toLowerCase().includes(searchValue.toLowerCase()) )
    }

    return (
        <div className={`notes-container ${layout === 'list' && `notes-container-list`}`}>
            {
                filteredNotesArray.map((note, i) => {
                    return <NoteThumbnail key={i} props={note} />
                })
            }
            <Link to="/note">
                <button className="open-new-note-btn"><AiFillPlusCircle /></button>
            </Link>
        </div>
    )
}

export default NotesContainer
