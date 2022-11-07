import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css"

// movie/now_playing?api_key=6f9c4a327b896752737d1c2e40f31a2b

function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function loadMovies() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "6f9c4a327b896752737d1c2e40f31a2b",
                    language: "en",
                    page: 1,
                }
            })
            setMovies(response.data.results.slice(0, 10));
            setLoading(false);
        }
        
        loadMovies();
    }, [])

    if(loading){
        return(
            <div className="loading">
                <h2>Loading Movies...</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="list-movies">
                {movies.map((movie) => {
                    return (
                        <article key={movie.id}>
                                <strong>{movie.title}</strong>
                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/>
                                <Link to={`/movie/${movie.id}`}>Acess</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;