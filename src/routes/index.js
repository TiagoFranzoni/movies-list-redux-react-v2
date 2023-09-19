import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layout/RootLayout";
import { Home } from "../views/Home";
import { MovieDetails } from "../views/moviesDetails/MovieDetails";
import { Favorites } from "../views/favorites/Favorites";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "/movie/:movieId",
				element: <MovieDetails />
			},
			{
				path: "/favorites",
				element: <Favorites />
			}
		]
	}
])