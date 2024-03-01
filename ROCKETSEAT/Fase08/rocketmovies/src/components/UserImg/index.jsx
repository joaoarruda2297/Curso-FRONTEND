import { Container } from "./styles";

export function UserImg({size}){
    return(
        <Container size={size}>
            <img src="https://github.com/joaoarruda2297.png" alt="User image" />
        </Container>
    );
}