// Base URL: http://api.themoviedb.org/3/
// API's URL: movie/now_playing?api_key=6f9c4a327b896752737d1c2e40f31a2b

import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default api;