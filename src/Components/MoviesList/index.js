import React from 'react';
import { useSelector } from 'react-redux';
import './index.css';
function MoviesList() {
    const movies = useSelector(function (state) {
        return state.movies;
    });
    console.log(movies);
    return (
        <main className='moviesList'>
            {movies && Array.isArray(movies) && (
                <>
                    {movies.length > 0
                        ? movies.map(function (movie) {
                              return (
                                  <div className='card movie' key={movie.id}>
                                      <img
                                          className='card-img-top'
                                          src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                                      ></img>
                                      <div className='card-body'>
                                          <h2>
                                              {movie.original_title} ({movie.title})
                                          </h2>

                                          <p>{movie.overview}</p>
                                          <em>
                                              Date: {movie.release_date} - Average: {movie.vote_average}
                                          </em>
                                      </div>
                                  </div>
                              );
                          })
                        : 'No Movies'}
                </>
            )}
        </main>
    );
}

export default MoviesList;
