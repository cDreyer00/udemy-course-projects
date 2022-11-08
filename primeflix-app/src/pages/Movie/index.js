import { useEffect, useState } from "react";
import { useParams, useNavigate, json } from "react-router-dom";
import {toast} from "react-toastify"
import api from "../../services/api";
import "./movie.css"

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

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
                    navigate("/", { replace: true })
                })

        }

        loadMovie();
        setLoading(false)

        return () => { };
    }, [navigate, id])

    function saveMovie(){
        const moviesList = localStorage.getItem("@primeflix");

        let moviesSaved = JSON.parse(moviesList) || [];
        const hasMovie = moviesSaved.some((movieSaved) => movieSaved.id == movie.id); 

        if(hasMovie){
            toast.warn("Movie already saved")
            return;
        }

        moviesSaved.push(movie);
        localStorage.setItem("@primeflix", JSON.stringify(moviesSaved));
        toast.success("Movie saved");
    }

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
                <button onClick={saveMovie}>Save</button>
                <a target="blank" rel="exterlan" href={`https://youtube.com/results?search_query=${movie.title} trailer`}>
                    <button>
                        Trailer
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Movie;