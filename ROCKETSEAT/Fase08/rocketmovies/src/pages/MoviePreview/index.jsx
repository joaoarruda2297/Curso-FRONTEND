import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Stars } from "../../components/Stars";
import { UserImg } from "../../components/UserImg";

export function MoviePreview(){
    return(
        <Container>
            <Header/>

            <main>
                <Content>
                    <ButtonText/>
                    
                    <div className="movie-title">
                        <h1>Interstellar</h1>
                        <Stars value="4"/>
                    </div>

                    <div className="movie-creator">
                        <UserImg size={16}/>
                    </div>

                </Content>
            </main>
        </Container>
    );
} 