import React from 'react';
import { useSelector } from 'react-redux';
function MoviesList() {
    const movies = useSelector(function (state) {
        return state.movies;
    });
    console.log(movies);
    return (
        <main>
            {movies.map(function (movie) {
                return (
                    <div key={movie.id}>
                        <h2>
                            {movie.original_title} ({movie.title})
                        </h2>
                        <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}></img>
                        <p>{movie.overview}</p>
                        <em>
                            Date: {movie.release_date} - Average: {movie.vote_average}
                        </em>
                    </div>
                );
            })}
        </main>
    );
}

export default MoviesList;
