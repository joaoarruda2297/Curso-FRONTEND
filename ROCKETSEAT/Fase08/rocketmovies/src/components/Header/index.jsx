import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { UserImg } from "../UserImg";

export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>

            <Input
                placeholder = "Pesquisar pelo título"
                type = "text"
            />

            <Profile to="/profile">
                <div>
                    <strong>João Arruda</strong>
                    <a href="/">sair</a>
                </div>
                <UserImg size={64}/>
            </Profile>
        </Container>
    );
}