import { Container, Form, Background } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button";
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import { api } from "../../services/api";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos!");
        }
        api.post("/users", {name, email, password})
            .then(()=>{
                alert("Usuário cadastrado com sucesso!");
                navigate("/login");
            })
            .catch(error=>{
                if(error.response){
                    alert(error.response.data.message);
                }
                else{
                    alert("Não foi possível cadastrar")
                }
            });
    }

    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button 
                    title="Cadastrar" 
                    className="addUser" 
                    onClick={handleSignUp}
                />
                
                <Link to="/login" className="backSignIn">
                    <FaArrowLeft/> Voltar para o login
                </Link>
            </Form>
            <Background/>
        </Container>
    )
}