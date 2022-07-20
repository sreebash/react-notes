import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import notesListPage from "./NotesListPage";

const NotePage = () => {
    const {noteId} = useParams();
    
    let [note, setNote] = useState({});
    
    const getNote = async () => {
        let response = await fetch(`/api/notes/${noteId}`)
        let data = await response.json()
        setNote(data)
    }
    
    useEffect(() => {
        getNote()
    }, [noteId])
    return (
        <div>
            <p>{note.body}</p>
        
        </div>
    );
};

export default NotePage;