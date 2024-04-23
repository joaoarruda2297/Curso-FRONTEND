import { Container } from "./styles";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function ButtonText({to, onClick,title,icon, ...rest}){
    return(
        <Container {...rest}>
            <Link to={to} onClick={onClick}>
                {icon}
                {title}
            </Link>
        </Container>
    );
}