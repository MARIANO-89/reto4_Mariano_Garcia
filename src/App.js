import React from 'react';
import './App.css';
import Header from './Components/Header';
import MoviesList from './Components/MoviesList';
function App() {
    return (
        <div className='App'>
            <Header />
            <MoviesList />
        </div>
    );
}

export default App;
