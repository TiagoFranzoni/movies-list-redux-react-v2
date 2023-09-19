import { useParams } from "react-router-dom"
import { MovieImage } from "../../components/MovieImage/MovieImage";
import styles from "./MoviesDetails.module.css"
import { formatDate } from "../../components/MovieItem/MovieItem";
import { useGetMoveiDetail } from "../../hooks/useGetMovieDetail";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../styles";
import { addMovie, removeMovie } from "../../store/features/favorites";

export function MovieDetails(){
    const { movieId } = useParams();
    const movie = useGetMoveiDetail(movieId);
    const releaseDate = formatDate(movie.release_date);
    const dispatch = useDispatch();
	const favoriteMovies = useSelector((state) => state.favorite.movies);

    return(
        <article id="page-movieDetail" className={styles.container}>
            <image is="x3d" className={styles.image}>            
                <MovieImage path={movie.poster_path} size={500} />
            </image>

            <div className={styles.movieInfo}>
                <h1>{movie.title}</h1>
               
                <div className={styles.movieDescription}>
                    {movie.overview}
                </div>

                <p>Data de lançamento: {releaseDate}</p>
                <p>Popularidade: {movie.popularity}</p>
                <p>Nota: {movie.vote_average}</p>

                <div className={styles.button}>
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

        </article>
    )
}