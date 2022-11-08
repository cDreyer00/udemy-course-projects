import { useEffect, useState } from "react";
import { json, Link } from "react-router-dom";
import {toast} from "react-toastify"
import "./saved.css"

function SavedMovies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const moviesList = localStorage.getItem("@primeflix");
        setMovies(JSON.parse(moviesList) || [])
    }, [])

    function removeMovie(movieId){
        let filteredMovies = movies.filter((item) => {
            return (item.id !== movieId)
        })

        setMovies(filteredMovies);
        localStorage.setItem("@primeflix", JSON.stringify(filteredMovies))
        toast.success("Movie removed")
    }

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
                            <button onClick={() => removeMovie(movie.id)}>Remove</button>
                        </div>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default SavedMovies;