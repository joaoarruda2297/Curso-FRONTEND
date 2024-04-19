import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export const publicRoutes = [
    {
        path: '/login',
        element: <SignIn/>
    },
    {
        path: '/register',
        element:<SignUp/>
    }]