import { Container, Form, Background } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button";
import { FiMail, FiLock } from 'react-icons/fi';
import {Link, useSearchParams, useNavigate} from "react-router-dom";

import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function SignIn(){
    const {signIn} = useAuth();

    const navigate = useNavigate();
    const [params] = useSearchParams();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSignIn(){
        await signIn({email, password});
        navigate(params.get('callbackUrl') ?? '/')
    }
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

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
                    title="Entrar" 
                    className="signIn"
                    onClick={handleSignIn}
                />
                
                <Link to="/register" className="addUser">
                    Criar conta
                </Link>
            </Form>
            <Background/>
        </Container>
    )
}