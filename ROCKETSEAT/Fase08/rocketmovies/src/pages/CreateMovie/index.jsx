import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Marker } from "../../components/Marker";
import { Button } from "../../components/Button";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function CreateMovie(){
    const [marker,setMarker] = useState([]);
    const [newMarker, setNewMarker] = useState("");

    const [title,setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [comment, setComment] = useState("");
    
    const navigate = useNavigate();

    function handleAddMarker(){
        setMarker(prevState => [...prevState, newMarker]);
        setNewMarker("");
    }
    function handleDeleteMarker(indexDelete){
        setMarker(prevState => prevState.filter((_,index) => index !== indexDelete));
    }
    async function handleSubmitMovie(){
        if(!title || !rating || !comment){
            return alert("Preencha todos os campos!");
        }
        await api.post("/moviesnotes", {title, description: comment, rating, tags: marker});
        alert("Filme cadastrado com sucesso!");
        handleDeleteMovie();
        navigate("/");
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
                            onChange={e=> {
                                const ratingValue = e.target.value;
                                if(ratingValue.length === 0 || (!isNaN(ratingValue) && ratingValue >= 0 && ratingValue <= 5)){
                                    setRating(ratingValue);
                                }
                                else{
                                    alert("Este campo só aceita números de 0 a 5");
                                }
                            }}
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