import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import ArrowLeft from '../assets/arrow-left.svg'
import {useNavigate} from 'react-router-dom';


const NotePage = () => {
    const {noteId, history} = useParams();
    
    let [note, setNote] = useState({});
    
    const getNote = async () => {
        let response = await fetch(`/api/notes/${noteId}`)
        let data = await response.json()
        setNote(data)
    }
    
    useEffect(() => {
        getNote()
    }, [noteId])
    
    let updateNote = async () => {
        await fetch(`/api/notes/${noteId}/update/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(note)
        })
    }
    
    let deleteNote = async () => {
        await fetch(`/api/notes/${noteId}/delete/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'Application/json'
            }
        })
        navigate('/')
    }
    
    const navigate = useNavigate();
    let handleSubmit = () => {
        updateNote()
        navigate('/')
    }
    
    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <img src={ArrowLeft} alt="" onClick={handleSubmit}/>
                </h3>
                <button onClick={deleteNote}>Delete</button>
            
            </div>
            
            <textarea onChange={(e) => {
                setNote({...note, 'body': e.target.value})
            }} value={note.body}></textarea>
        
        
        </div>
    )
        ;
};

export default NotePage;