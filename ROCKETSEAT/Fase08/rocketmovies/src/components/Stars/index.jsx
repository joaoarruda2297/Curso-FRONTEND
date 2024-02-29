import { Container } from "./styles";
import { FaStar,FaRegStar } from "react-icons/fa";

export function Stars({value, ...rest}){
    return(
        <Container value={value}>
            {value >= 1 ? <FaStar /> : <FaRegStar />}
            {value >= 2 ? <FaStar /> : <FaRegStar />}
            {value >= 3 ? <FaStar /> : <FaRegStar />}
            {value >= 4 ? <FaStar /> : <FaRegStar />}
            {value >= 5 ? <FaStar /> : <FaRegStar />}
        </Container>
    );
}