import React, { useState } from 'react';
import { setMovies } from '../../actions/movies';
import { useDispatch } from 'react-redux';
import './index.css';
function Header() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    function searching() {
        if (value.length > 0) {
            fetch(
                'https://api.themoviedb.org/3/search/movie?api_key=7559ebc59bb34de6c16531a9fa0fa55e&query=' + value
            ).then(function (response) {
                response.json().then(function (data) {
                    dispatch(setMovies(data.results));
                });
            });
        }
    }
    function getTopRated() {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=7559ebc59bb34de6c16531a9fa0fa55e').then(function (
            response
        ) {
            response.json().then(function (data) {
                dispatch(setMovies(data.results));
            });
        });
    }
    return (
        <header className='header bg-dark'>
            <div className='search'>
                <div className='input-group input-group-lg'>
                    <div className='input-group-prepend'>
                        <span className='input-group-text' id='inputGroup-sizing-lg'>
                            🔎
                        </span>
                    </div>

                    <input
                        className='form-control'
                        name='search'
                        type='search'
                        value={value}
                        onChange={function (event) {
                            setValue(event.target.value);
                        }}
                        onKeyPress={function (event) {
                            if (event.charCode === 13) {
                                searching();
                            }
                        }}
                    />
                </div>
                <button className='btn btn-info' onClick={searching}>
                    Search
                </button>
                <button className='btn btn-warning' onClick={getTopRated}>
                    Top Rated
                </button>
            </div>
        </header>
    );
}

export default Header;
