import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React, {Component} from 'react';
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";


function App() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<NotesListPage/>}/>
                    <Route exact path="/note/:noteId" element={<NotePage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;