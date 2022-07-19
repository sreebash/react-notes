import React, {useEffect, useState} from 'react';
import ListItem from "../components/ListItem";

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
        <div>
            <div className="notes-list">
                {notes.map((note, index) => {
                    return <ListItem note={note} key={index}/>
                })}
            </div>
        </div>
    );
};

export default NotesListPage;