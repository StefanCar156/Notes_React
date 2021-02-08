import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'
import TrashNoteThumbnail from './TrashNoteThumbnail'

const Trash = () => {
    const { layout, trashNotes, isTrashOpen, setIsTrashOpen, searchValue } = useGlobalContext()
    useEffect(() => {
        setIsTrashOpen(true)
    }, [])
    let filteredTrashArray = trashNotes

    if (trashNotes.length === 0) {
        return <p className="no-notes-notification">No notes in trash.</p>
    }

    if (searchValue !== "") {
        filteredTrashArray = trashNotes.filter((note) => note.noteTitle.toLowerCase().includes(searchValue.toLowerCase()) || note.noteText.toLowerCase().includes(searchValue.toLowerCase()) )
    }

    return (
        <div className={`trash-container ${layout === 'list' && `trash-container-list`}`}>
            {
                filteredTrashArray.map((note, i) => {
                    return <TrashNoteThumbnail key={i} props={note} />
                })
            }
        </div>
    )
}

export default Trash
