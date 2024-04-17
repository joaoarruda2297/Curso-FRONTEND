import { Container, Form, Avatar } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import {useState} from "react";
import {useAuth} from "../../hooks/auth";

export function Profile(){
    const {user} = useAuth();

    const [name,setName] = useState(user.name);
    const [email,setEmail] = useState(user.email);
    const [password,setPassword] = useState();
    const [newPassword,setNewPassword] = useState();

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
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder = "E-mail"
                    type = "text"
                    icon = {FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder = "Senha atual"
                    type = "password"
                    icon = {FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Input
                    placeholder = "Nova senha"
                    type = "password"
                    icon = {FiLock}
                    onChange={e => setNewPassword(e.target.value)}
                />
                
                <Button className="saveButton" title="Salvar"/>
            </Form>
        </Container>
    );
}