import { CreateMovie } from "../pages/CreateMovie";
import { Home } from "../pages/Home";
import { MoviePreview } from "../pages/MoviePreview";
import { Profile } from "../pages/Profile";

export const appRoutes = [
{
    path: '/',
    element: <Home />
},
{
    path: '/new-movie',
    element: <CreateMovie/>
},
{
    path: '/movie-preview',
    element: <MoviePreview/>
},
{
    path: '/profile',
    element: <Profile/>
}]