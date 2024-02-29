import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

export function Tag({value,isNew,onClick, ...rest}){
    return(
        <Container>
            <input 
                type="text"
                value={value}
                readOnly={!isNew}
                
            />
        </Container>
    );
};