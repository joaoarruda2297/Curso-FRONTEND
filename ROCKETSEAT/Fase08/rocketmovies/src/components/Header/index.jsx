import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { UserImg } from "../UserImg";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Header(){
    const {signOut} = useAuth();
    return(
        <Container>
            <h1>RocketMovies</h1>

            <Input
                placeholder = "Pesquisar pelo título"
                type = "text"
            />

            <Profile>
                <div>
                    <Link className="userName" to="/profile">João Arruda</Link>
                    <a className="logoutButton" onClick={signOut}>sair</a>
                </div>
                <UserImg to="/profile" size={64}/>
            </Profile>
        </Container>
    );
}