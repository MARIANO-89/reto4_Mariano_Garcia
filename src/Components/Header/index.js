import React, { useState } from 'react';
import { setMovies } from '../../actions/movies';
import { useDispatch } from 'react-redux';
function Header() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    function searching() {
        fetch('https://api.themoviedb.org/3/search/movie?api_key=7559ebc59bb34de6c16531a9fa0fa55e&query=' + value).then(
            function (response) {
                response.json().then(function (data) {
                    dispatch(setMovies(data.results));
                });
            }
        );
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
        <header>
            <input
                name='search'
                type='search'
                value={value}
                onChange={function (event) {
                    setValue(event.target.value);
                }}
            />

            <button onClick={searching}>search</button>
            <button onClick={getTopRated}>Top Rated</button>
        </header>
    );
}

export default Header;
