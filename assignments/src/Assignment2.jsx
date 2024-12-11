import React, { useState } from 'react';

// Task 1
function MoviesList () {
    const [movies, setMovie] = useState([
        {
            "id": 1,
            "title": "Home Alone",
            "description": "A boy is left behind to defend his home from robbers while his family is on vacation in Paris",
            "genre": "comedy",
            "show": "false"
        },
        {
            "id": 2,
            "title": "Die Hard",
            "description": "A man reunites with his estranged wife and is attacked by terrorists",
            "genre": "action",
            "show": "false"
        },
        {
            "id": 3,
            "title":"The Santa Clause",
            "description": "A man learns the meaning of Christmas when he accidentally kills Santa and dons his suit, enacting the Santa Clause and becoming the next Santa",
            "genre": "comedy",
            "show": "false"
        },
        {
            "id": 4,
            "title": "A Christmas Story",
            "description": "A boy recalls the events leading up to a past Christmas where he got a bb gun as a gift",
            "genre": "comedy",
            "show": "false"
        }
    ])
    //Task 2
    const toggleShowDetails = (id) => {
        setMovie((movies) => 
            movies.map((movie) => 
                movie.id === id ? { ...movie, show: !movie.show } : movie
            ) 
        )
    }

    // Task 4
        
    return (
        <div>
            <h1>Movies List</h1>
            <h3>Click the title to see the description.</h3>
            {movies.map((movie) => (
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
            ))}
            <button>Show Comedies</button>
        </div>
    )
}
export default MoviesList

/*
    const toggleGenre = (genre) => {
        setMovie((movies) =>
            movies.filter((movie) =>
                movie.genre === genre)
        )
    }
*/