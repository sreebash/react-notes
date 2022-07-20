import React from 'react';
import {useParams} from "react-router-dom";

const NotePage = () => {
    const {noteId} = useParams();
    console.log('noteId:', noteId)
    return (
        <div>
            <h1>Single Note {noteId}</h1>
        
        </div>
    );
};

export default NotePage;