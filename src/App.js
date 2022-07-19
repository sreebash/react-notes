import React, {Component} from 'react';
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <NotesListPage/>
            </div>
        );
    }
}

export default App;
