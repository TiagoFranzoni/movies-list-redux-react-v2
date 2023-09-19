import { useState } from "react"
import  styles from "./SearchMovies.module.css"

export function SearchMovies({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('')

    function handleOnSubmit(event) {
        event.preventDefault();
        onSearch(searchQuery);
        setSearchQuery('');
    }

    function resetSearch() {
        setSearchQuery("");
        onSearch("");
    }

    return (
        <div className={styles.searchContainer}>
            <form onSubmit={handleOnSubmit}>
                <input type="text" placeholder="Buscar por Título" onChange={(event) => setSearchQuery(event.target.value)} value={searchQuery} />
                <button type="submit">Buscar</button>
                <button onClick={resetSearch}>Resetar</button>
            </form>
        </div>

    )
    
}