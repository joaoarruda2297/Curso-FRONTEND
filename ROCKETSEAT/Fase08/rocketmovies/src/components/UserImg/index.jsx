import { Container } from "./styles";

export function UserImg({to,size,src}){
    return(
        <Container size={size} to={to}>
            <img src={src} alt="User image" />
        </Container>
    );
}