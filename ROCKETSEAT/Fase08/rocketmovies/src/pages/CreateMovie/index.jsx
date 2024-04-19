import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Marker } from "../../components/Marker";
import { Button } from "../../components/Button";

import { useState } from "react";

export function CreateMovie(){
    const [marker,setMarker] = useState([]);
    const [newMarker, setNewMarker] = useState("");

    const [title,setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [comment, setComment] = useState("");
    

    function handleAddMarker(){
        setMarker(prevState => [...prevState, newMarker]);
        setNewMarker("");
    }
    function handleDeleteMarker(indexDelete){
        setMarker(prevState => prevState.filter((_,index) => index !== indexDelete));
    }
    function handleSubmitMovie(){

    }
    function handleDeleteMovie(){
        setMarker([]);
        setNewMarker("");
        setTitle("");
        setRating("");
        setComment("");
    }

    return(
        <Container>
            <Header/>

            <main>
                <Content>
                    <ButtonText/>
                    <h1>Novo filme</h1>
                    <div className="twoInputs">
                        <Input
                            value={title}
                            placeholder="Título"
                            type="text"
                            onChange={e=> setTitle(e.target.value)}
                        />

                        <Input
                            value={rating}
                            placeholder="Sua nota (de 0 a 5)"
                            type="text"
                            onChange={e=> setRating(e.target.value)}
                        />
                    </div>

                    <TextArea
                        value={comment}
                        placeholder="Observações" 
                        onChange={e=> setComment(e.target.value)}
                    />

                    <h2>Marcadores</h2>

                    <div className="boxMarker">
                        {
                            marker.map((mark, index) => (
                                <Marker
                                    key={String(index)}
                                    size={mark.length}
                                    value={mark}
                                    onClick={() => handleDeleteMarker(index)}
                                />
                            ))
                        }
                        <Marker
                            isNew
                            placeholder="Novo marcador"
                            value={newMarker}
                            onChange={e => setNewMarker(e.target.value)}
                            onClick={handleAddMarker}
                        />
                    </div>

                    <div className="boxButton">
                        <Button 
                            title="Excluir filme" 
                            className="delete-button"
                            onClick={handleDeleteMovie}
                        />

                        <Button 
                            title="Salvar alterações"
                            onClick={handleSubmitMovie}
                        />
                    </div>

                </Content>
            </main>
        </Container>
    );
}