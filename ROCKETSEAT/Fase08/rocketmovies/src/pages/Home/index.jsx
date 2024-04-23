import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { FiPlus } from "react-icons/fi";
import { Card } from "../../components/Card";

import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Home(){
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);

    const navigate = useNavigate();

    function handleMoviePreview(id){
        navigate(`/movie-preview/${id}`)
    }

    useEffect(()=> {
        async function fetchSearch(){
            const response = await api.get(`/moviesnotes?title=${search}`);
            setMovies(response.data);
        }
        fetchSearch();
        
    }, [search]);

    return(
        <Container>
            <Header onChange={(e => setSearch(e.target.value))}/>

            <main>
                <div id="little-header">
                    <h1>Meus filmes</h1>
                    
                    <Button
                        className="addMovie"
                        title="Adicionar filme" 
                        children={<FiPlus />}
                        to="/new-movie"
                    />
                </div>

                {
                    movies &&
                    <Content>
                        {
                            movies.map(mov => (
                                <Card
                                    key={String(mov.id)}
                                    title={mov.title}
                                    value={mov.rating}
                                    text={mov.description}
                                    tags={mov.tags}
                                    onClick={()=>handleMoviePreview(mov.id)}
                                />
                            ))
                        }
                    </Content>
                }
            </main>
        </Container>
    );
}