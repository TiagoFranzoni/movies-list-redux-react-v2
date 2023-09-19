import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";

export function useGetMoveiDetail(movieId) {
    const [movie, setMovies] = useState({});
    
    useEffect(() => {
        MoviesService.getMovieDetail(movieId)
        .then(({ data }) => setMovies(data))
    }, [movieId])

    return movie;
}

