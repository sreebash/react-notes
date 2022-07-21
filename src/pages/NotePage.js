import React, {useEffect, useState} from 'react';
import { useParams} from "react-router-dom";
import ArrowLeft from '../assets/arrow-left.svg'
import {useNavigate} from 'react-router-dom';


const NotePage = () => {
    const {noteId} = useParams();
    
    let [note, setNote] = useState({});
    
    const getNote = async () => {
        if (noteId === 'new') return
        let response = await fetch(`/api/notes/${noteId}`)
        let data = await response.json()
        setNote(data)
    }
    
    useEffect(() => {
        getNote()
    }, [noteId])
    
    let createNote = async () => {
        await fetch(`/api/notes/create/`, {
            method: "POST",
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(note)
        })
    }
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
        if (noteId !== 'new' && !note.body) {
            deleteNote()
        } else if (noteId !== 'new') {
            updateNote()
        } else if (noteId === 'new' && note !== '') {
            createNote()
        }
        navigate('/')
    }
    
    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <img src={ArrowLeft} alt="" onClick={handleSubmit}/>
                </h3>
                {noteId !== 'new' ? (<button onClick={deleteNote}>Delete</button>
                ) : (<button>Done</button>)}
            
            </div>
            
            <textarea onChange={(e) => {
                setNote({...note, 'body': e.target.value})
            }} value={note.body}></textarea>
        
        
        </div>
    )
        ;
};

export default NotePage;