import { Container } from "./styles";
import { FaArrowLeft } from "react-icons/fa6";

export function ButtonText(){
    return(
        <Container>
            <a href="/">
                <FaArrowLeft />
                Voltar
            </a>
        </Container>
    );
}