import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React, {Component} from 'react';
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";


function App() {
    return (
        
        <BrowserRouter>
            <div className="container dark">
                <div className="app">
                    <Header/>
                    <Routes>
                        <Route exact path="/" element={<NotesListPage/>}/>
                        <Route exact path="/note/:noteId" element={<NotePage/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    
    );
}

export default App;