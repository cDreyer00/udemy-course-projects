import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./saved.css"

function SavedMovies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const moviesList = localStorage.getItem("@primeflix");
        setMovies(JSON.parse(moviesList) || [])
    }, [])

    return (
        <div className="saved-movies">
            <h1>Saved Movies</h1>
            <ul>
            {movies.map((movie) => {
                return (
                    <li key={movie.id}>
                        <span>{movie.title}</span>
                        <div>
                            <Link to={`/movie/${movie.id}`}>See details</Link>
                            <button>Remove</button>
                        </div>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default SavedMovies;