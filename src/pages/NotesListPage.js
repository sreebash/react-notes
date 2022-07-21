import React, {useEffect, useState} from 'react';
import ListItem from "../components/ListItem";
import AddButton from "../components/AddButton";

const NotesListPage = () => {
    
    let [notes, setNotes] = useState([])
    
    let getNotes = async () => {
        let response = await fetch('/api/notes/')
        let data = await response.json()
        setNotes(data)
    }
    
    useEffect(() => {
        getNotes()
    }, [])
    
    
    return (
        <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">{notes.length}</p>
            </div>
            <div className="notes-list">
                {notes.map((note, index) => {
                    return <ListItem note={note} key={index}/>
                })}
            </div>
            <AddButton/>
        
        </div>
    );
};

export default NotesListPage;