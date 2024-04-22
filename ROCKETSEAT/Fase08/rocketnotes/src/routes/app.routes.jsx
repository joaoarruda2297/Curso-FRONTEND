import { New } from '../pages/New';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Profile } from '../pages/Profile';

export const appRoutes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/new',
        element: <New/>
    },
    {
        path: '/details/:id',
        element: <Details/>
    },
    {
        path: '/profile',
        element: <Profile/>
    }]