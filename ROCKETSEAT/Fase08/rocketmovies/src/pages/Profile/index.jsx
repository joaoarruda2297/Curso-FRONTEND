import { Container, Form, Avatar } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

export function Profile(){
    return(
        <Container>
            <header>
                <ButtonText/>
            </header>
            <Form>
                <Avatar>
                    <img 
                        src="https://github.com/joaoarruda2297.png"
                        alt="Foto do usuário" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera/>

                        <input
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>

                <Input 
                    placeholder = "Nome"
                    type = "text"
                    icon = {FiUser}
                />

                <Input
                    placeholder = "E-mail"
                    type = "text"
                    icon = {FiMail}
                />

                <Input
                    placeholder = "Senha atual"
                    type = "password"
                    icon = {FiLock}
                />

                <Input
                    placeholder = "Nova senha"
                    type = "password"
                    icon = {FiLock}
                />
                
                <Button className="saveButton" title="Salvar"/>
            </Form>
        </Container>
    );
}