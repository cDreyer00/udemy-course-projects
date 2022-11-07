import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import "./movie.css"

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true)

    let avaliation = Math.round(movie.vote_average * 100) / 100;

    useEffect(() => {
        async function loadMovie() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "6f9c4a327b896752737d1c2e40f31a2b",
                    language: "en",
                }
            })
                // movie found
                .then((response) => {
                    setMovie(response.data)
                })
                // movie not found
                .catch(() => {
                })

        }

        loadMovie();
        setLoading(false)

        return () => { };
    }, [])

    if (loading) {
        return (
            <div style={{ "textAlign": "center" }}>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div className="movie-infos">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
            <span>{movie.overview}</span>
            <strong>Avaliation: {avaliation} / 10</strong>

            <div className="movie-buttons">
                <button>Save</button>
                <button><a href="#">Trailer</a></button>
            </div>
        </div>
    )
}

export default Movie;