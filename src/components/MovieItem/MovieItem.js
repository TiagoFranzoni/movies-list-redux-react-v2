import { Link } from "react-router-dom";
import styles from "./MovieItem.module.css";
import { MovieImage } from "../MovieImage/MovieImage";
import { Button } from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../../store/features/favorites";

export function formatDate (releaseDate) {
    const date = new Date(releaseDate);
    return date.toLocaleDateString('pt-BR');
}

export function MovieItem ({ movie }) {
    const releaseDate = formatDate(movie.release_date);
	const dispatch = useDispatch();
	const favoriteMovies = useSelector((state) => state.favorite.movies);

    return (
        <div className={styles.movie}>
            <h3>{movie.title}</h3>
    
            <MovieImage path={movie.poster_path} />

            <div className={styles.movieInfo}>
                <div>
                    <strong>Data de lançamento:</strong> {releaseDate}
                </div>
            </div>

            <div className={styles.movieFooter}>
                <Link to={`/movie/${movie.id}`}>Ver Detalhes</Link>

                {favoriteMovies.find((m) => m.id === movie.id) ? (
                    <Button state ="remove" onClick={() => dispatch(removeMovie(movie))}>
                        Remover dos favoritos
                    </Button>
                ) : (
                    <Button state="add" onClick={() => dispatch(addMovie(movie))}>
                        Adicionar aos favoritos
                    </Button>
                )}
            </div>

        </div>
    )
}