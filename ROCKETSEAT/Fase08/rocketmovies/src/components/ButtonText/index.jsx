import { Container } from "./styles";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function ButtonText(){
    return(
        <Container>
            <Link to="/">
                <FaArrowLeft />
                Voltar
            </Link>
        </Container>
    );
}