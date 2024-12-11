import React, { useState } from 'react';

// Task 1
function MoviesList (props) {
    const [movies, setMovie] = useState(props.fullMovieList);
    //Task 2
    const toggleShowDetails = (id) => {
        setMovie((movies) => 
            movies.map((movie) => 
                movie.id === id ? { ...movie, show: !movie.show } : movie
            ) 
        )
    }

    // Task 4
    const [genreMovies, setGenreMovies] = useState("all");

    const handleNoFilter = () => {
        setGenreMovies("all");
        setMovie(props.fullMovieList)
    };
    const handleMovieFilter = (genre) => {
        setGenreMovies(genre);
        const filteredMovies = setMovie(movies.filter((movie) => movie.genre === genre));
        return filteredMovies;
    };

    return (
        <div>
            <h1>Movies List</h1>
            <h3>Click the title to see the description.</h3>
            { movies.map((movie) => (
                <ul>
                    <li>
                        <div key={movie.id}>
                        <button onClick={() => toggleShowDetails(movie.id)}>
                            {movie.title}
                        </button>
                    
                        {movie.show && <p>{movie.description}</p>}
                        {/* Task 3 */}
                        <button onClick={() => {setMovie(movies.filter(m => m.id !== movie.id))}}>Delete</button>
                        </div>
                    </li>
                </ul>
            ))
        }
        {genreMovies == "all" ? (
            <button onClick={() => handleMovieFilter("comedy")}>Show Comedies</button>
        ) : (
            <button onClick={() => handleNoFilter()}>Show All</button>
        )}
        </div>
    )
};
export default MoviesList

/*
    const toggleGenre = (genre) => {
        
*/