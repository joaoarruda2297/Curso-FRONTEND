import { Container } from "./style";
import { Stars } from "../Stars";
import { Tag } from "../Tag";

export function Card({title, value, text, tags, onClick, ...rest}){
    return(
        <Container 
            onClick={onClick}
        >
            <div className="card-header">
                <h1>{title}</h1>
                <Stars value={value}/>
            </div>
            <p>{text}</p>
            {
                tags &&
                <div id="tags">
                    {
                        tags.map(tag => <Tag value={tag.name} key={String(tag.id)}/>)
                    }
                </div>
            }
        </Container>
    );
}