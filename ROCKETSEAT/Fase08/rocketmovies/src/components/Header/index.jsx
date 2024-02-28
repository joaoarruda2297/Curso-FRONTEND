import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { FiMail } from 'react-icons/fi';

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
                <img src="https://github.com/joaoarruda2297.png" alt="Imagem do Github (do usuário)" />
            </Profile>
        </Container>
    );
}