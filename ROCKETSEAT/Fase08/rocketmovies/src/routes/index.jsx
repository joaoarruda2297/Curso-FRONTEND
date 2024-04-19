import { BrowserRouter, Routes as RRDRoutes, Route, Navigate} from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { appRoutes } from "./app.routes";
import {publicRoutes} from "./public.routes";

const WithAuth = ({ children }) => {
    const {user, isLoading} = useAuth();

    if(isLoading){
        return null
    }

    if(!user){
        return <Navigate to={`/login?callbackUrl=${encodeURIComponent(window.location.pathname)}`} />
    }

    return children
}

const NoAuth = ({ children }) => {
    const {user, isLoading} = useAuth();

    if(isLoading){
        return null
    }

    if(user){
        return <Navigate to="/" />
    }

    return children
}

export function Routes(){
    return(
        <BrowserRouter>
            <RRDRoutes>
                {publicRoutes.map(({ path, element }) => (
                    <Route key={path} path={path} element={<NoAuth>{element}</NoAuth>} />
                ))}
                {appRoutes.map(({ path, element }) => (
                    <Route key={path} path={path} element={<WithAuth>{element}</WithAuth>} />
                ))}
            </RRDRoutes>
        </BrowserRouter>
    );
}