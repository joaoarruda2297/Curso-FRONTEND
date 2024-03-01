import { Container } from "./styles";

export function Button({title, children, loading = false, ...rest}){
    return(
    <Container 
        type="button"
        disabled={loading}//isso aqui faz dizer que disabled é true
        {...rest}//isso aqui é pra puxar todas as outras propriedades
    >
        {children ?? ""}
        {loading ? 'Carregando...' : title}
    </Container>
    );
}