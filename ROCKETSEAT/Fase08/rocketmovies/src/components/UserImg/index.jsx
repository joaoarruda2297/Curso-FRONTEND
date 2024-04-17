import { Container } from "./styles";

export function UserImg({to,size}){
    return(
        <Container size={size} to={to}>
            <img src="https://github.com/joaoarruda2297.png" alt="User image" />
        </Container>
    );
}