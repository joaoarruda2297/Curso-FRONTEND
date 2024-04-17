import { Container, Form, Avatar } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import {useState} from "react";
import {useAuth} from "../../hooks/auth";
import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Profile(){
    const {user, updateProfile} = useAuth();

    const [name,setName] = useState(user.name);
    const [email,setEmail] = useState(user.email);
    const [password,setPassword] = useState();
    const [newPassword,setNewPassword] = useState();

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    const [avatar, setAvatar] = useState(avatarURL);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate(){
        const user = {
            name,
            email,
            old_password: password,
            password: newPassword
        }
        await updateProfile({user, avatarFile})
    }
    
    function handleChangeAvatar(event){
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return(
        <Container>
            <header>
                <ButtonText/>
            </header>
            <Form>
                <Avatar>
                    <img 
                        src={avatar}
                        alt="Foto do usuário" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera/>

                        <input
                            id="avatar"
                            type="file"
                            onChange={handleChangeAvatar}
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
                
                <Button 
                    className="saveButton" 
                    title="Salvar"
                    onClick={handleUpdate}
                />
            </Form>
        </Container>
    );
}