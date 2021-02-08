import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {

    // Get data from local storage
    const getLocalStorage = () => {
        let notes = localStorage.getItem('notes')
        if (notes) {
            return JSON.parse(localStorage.getItem('notes'))
        } 
        else {
          return []
        }
    }
    const getLocalStorageTrash = () => {
        let trashNotes = localStorage.getItem('trashNotes')
        if (trashNotes) {
            return JSON.parse(localStorage.getItem('trashNotes'))
        } 
        else {
          return []
        }
    }

    const [notes, setNotes] = useState(getLocalStorage())
    const [trashNotes, setTrashNotes] = useState(getLocalStorageTrash())
    const [layout, setLayout] = useState('grid')
    const [isOptionsActive, setIsOptionsActive] = useState(false)
    const [newTitle, setNewTitle] = useState("")
    const [newText, setNewText] = useState("")
    const [isEditingNote, setIsEditingNote] = useState(false)
    const [editingId, setEditingId] = useState(null)
    const [isTrashOpen, setIsTrashOpen] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    // Change Layout
    const handleChangeLayout = () => {
        layout === 'grid' ? setLayout('list') : setLayout('grid')
        setIsOptionsActive(false)
    }

    // Add note
    const handleAddNote = () => {
        // Check if user is editing existing note
        if (isEditingNote) {
            notes.map((note) => {
                if (note.noteId === editingId) {
                    notes.splice(notes.indexOf(note), 1)
                    const newDate = new Date()
                    const newDay = newDate.getDate()
                    const newMonth = newDate.getMonth()
                    const newYear = newDate.getFullYear()
                    let updatedNote = {
                        noteId: note.noteId,
                        noteTitle: newTitle ? newTitle : 'Unnamed',
                        noteText: newText,
                        noteDate: `${newDay}.${newMonth}.${newYear}.`
                    }
                    setNotes([...notes, updatedNote])
                    localStorage.setItem('notes', JSON.stringify([...notes, updatedNote]))
                }
            })
            return
        }
        // Create new note
        const newDate = new Date()
        const newDay = newDate.getDate()
        const newMonth = newDate.getMonth()
        const newYear = newDate.getFullYear()

        const newNote = {
            noteId: notes.length + 1,
            noteTitle : newTitle ? newTitle : 'Unnamed',
            noteText : newText,
            noteDate : `${newDay}.${newMonth}.${newYear}.`
        }
        // Prevent repeating id
        if (notes.length === 0) {
            newNote.noteId = 1
        } else {
            newNote.noteId = notes[notes.length - 1].noteId + 1
        }
        // Update local storage
        setNotes([...notes, newNote])
        localStorage.setItem('notes', JSON.stringify([...notes, newNote]))
        // Reset state values
        setNewText("")
        setNewTitle("")
    }

    // Remove note from notes
    const handleRemoveNote = (noteId) => {
        // Determine removed note
        let removedNote = notes.filter(note => note.noteId === noteId)[0]
        let filteredNotes = notes.filter(note => note.noteId !== noteId)
        // Remove note from notes
        setNotes(filteredNotes)
        localStorage.setItem('notes', JSON.stringify(filteredNotes))
        // Give note new id in trash
        if (trashNotes.length === 0) {
            removedNote.noteId = 1
        } else {
            removedNote.noteId = trashNotes[trashNotes.length - 1].noteId + 1
        }
        // Add note to trash
        setTrashNotes([...trashNotes, removedNote])
        localStorage.setItem('trashNotes', JSON.stringify([...trashNotes, removedNote]))
    }

    // Remove note from trash
    const handleDeleteNote = (noteId) => {
        let filteredTrashNotes = trashNotes.filter(note => note.noteId !== noteId)
        setTrashNotes(filteredTrashNotes)
        localStorage.setItem('trashNotes', JSON.stringify(filteredTrashNotes))
    }

    // Restore note from trash
    const handleRestoreNote = (noteId) => {
        let restoredNote = trashNotes.filter(note => note.noteId === noteId)[0]
        // Remove note from trash
        handleDeleteNote(noteId)
        // Give note new id
        if (notes.length === 0) {
            restoredNote.noteId = 1
        } else {
            restoredNote.noteId = notes[notes.length - 1].noteId + 1
        }
        // Restore note
        setNotes([...notes, restoredNote])
        localStorage.setItem('notes', JSON.stringify([...notes, restoredNote]))
    }

    // Edit note
    const handleEditNote = (noteId, noteTitle, noteText) => {
        setIsEditingNote(true)
        setEditingId(noteId)
        setNewTitle(noteTitle)
        setNewText(noteText)
    }

    // Go back
    const handleGoBack = () => {
        window.history.back()
        setNewTitle("")
        setNewText("")
    }

    return <AppContext.Provider value={{layout, isOptionsActive, setIsOptionsActive, handleChangeLayout, notes, trashNotes, handleAddNote, newText, newTitle, setNewText, setNewTitle, handleRemoveNote, handleDeleteNote, handleRestoreNote, handleEditNote, isEditingNote, isTrashOpen, setIsTrashOpen, searchValue, setSearchValue, handleGoBack}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }