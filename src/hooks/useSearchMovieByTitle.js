import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";

export function useSearchByTitle(movieTitle) {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (!movieTitle) {
            setSearchResults([]);
            return;
        }

        MoviesService.searchByMoveiTitle(movieTitle).then(({ data }) => 
            setSearchResults(data.results)
        );
    }, [movieTitle]);

    return searchResults;
}