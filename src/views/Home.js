import { useState } from "react";
import { MoviesList } from "../components/MoviesList/MoviesList";
import { SearchMovies } from "../components/SearcMovies/SearchMovies";
import { useGetMovies } from "../hooks/useGetMovies";
import { useSearchByTitle } from "../hooks/useSearchMovieByTitle";

export function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const movies = useGetMovies();
    const searchResults = useSearchByTitle(searchQuery);

    function handleOnSearch(movieTitle) {
        setSearchQuery(movieTitle);
    }

    return (
        <>
            <SearchMovies onSearch={handleOnSearch} />
            <MoviesList  movies={searchResults.length > 0 ? searchResults : movies} />
        </>
    )
}