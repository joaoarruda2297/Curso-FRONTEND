import { Container } from "./style";
import { Stars } from "../Stars";
import { Tag } from "../Tag";

export function Card({title, value, text, ...rest}){
    return(
        <Container>
            <div className="card-header">
                <h1>{title}</h1>
                <Stars value={value}/>
            </div>
            <p>{text}</p>
            <div id="tags">
                <Tag value="Ficção científica"/>
                <Tag value="Drama"/>
                <Tag value="Família"/>
            </div>
        </Container>
    );
}