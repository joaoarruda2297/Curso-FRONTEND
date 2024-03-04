import { RiShutDownLine } from 'react-icons/ri';
import {Container, Profile, Logout} from "./styles";

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/joaoarruda2297.png" alt="Imagem do Github (do usuário)" />
                <div>
                    <span>Bem vindo,</span>
                    <strong>João Arruda</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    );
}