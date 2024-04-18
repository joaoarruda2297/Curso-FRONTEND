import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { UserImg } from "../UserImg";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Header(){
    const {signOut, user} = useAuth();

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return(
        <Container>
            <h1>RocketMovies</h1>

            <Input
                placeholder = "Pesquisar pelo título"
                type = "text"
            />

            <Profile>
                <div>
                    <Link className="userName" to="/profile">{user.name}</Link>
                    <Link className="logoutButton" onClick={signOut} to="/">sair</Link>
                </div>
                <UserImg to="/profile" size={64} src={avatarURL}/>
            </Profile>
        </Container>
    );
}