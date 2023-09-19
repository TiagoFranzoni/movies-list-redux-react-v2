import { useSelector } from "react-redux";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import styles from "./Favorites.module.css"

export function Favorites() {
	const movies = useSelector(state => state.favorite.movies);

	return (
		<div className={styles.container}>
			<h1>Filmes marcados como favoritos</h1>
			<MoviesList movies={movies} />
		</div>
	)
}