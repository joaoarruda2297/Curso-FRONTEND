import { useState } from "react";

import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Link } from 'react-router-dom';

export function New(){
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("");
    }

    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input placeholder="título"/>
                    <TextArea placeholder="Observações"/>

                    <Section title="Links úteis">
                        {
                            links.map((link, index)=>(
                                <NoteItem
                                    key={String(index)}
                                    value={link}
                                    onClick={() => {}}
                                />
                            ))
                        }
                        <NoteItem 
                            isNew 
                            placeholder="Novo link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="react"/>
                            <NoteItem isNew placeholder="Nova tag"/>
                        </div>
                    </Section>

                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    );
}