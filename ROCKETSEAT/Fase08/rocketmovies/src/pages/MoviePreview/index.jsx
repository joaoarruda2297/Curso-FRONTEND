import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Stars } from "../../components/Stars";
import { UserImg } from "../../components/UserImg";
import { CiClock2 } from "react-icons/ci";
import { FiDelete } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa6";
import { Tag } from "../../components/Tag";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function MoviePreview(){
    const {user} = useAuth();
    const {id} = useParams();

    const [data, setData] = useState({});
    const [date, setDate] = useState("");

    const navigate = useNavigate();

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    async function handleDeleteMovie(){
        const askSure = window.confirm("Você tem certeza que deseja excluir o filme?");
        if(askSure){
            await api.delete(`/moviesnotes/${id}`);
            navigate("/");
        }
    }

    useEffect(() => {
        async function fecthMovie(){
            const response = await api.get(`/moviesnotes/${id}`);
            setData(response.data);
            const day = response.data.created_at;
            setDate(`${day[8]}${day[9]}/${day[5]}${day[6]}/${day[0]}${day[1]}${day[2]}${day[3]} às ${day[11]}${day[12]}:${day[14]}${day[15]}`);
        }
        fecthMovie();
    }, [])


    return(
        <Container>
            <Header/>

            <main>
                <Content>

                    <div className="headButtons">
                        <ButtonText
                            title="Voltar"
                            icon={<FaArrowLeft />}
                            to="/"
                        />

                        <ButtonText 
                            title="Excluir filme"
                            icon={<FiDelete />}
                            onClick={handleDeleteMovie}
                        />
                    </div>
                    
                    <div className="movie-title">
                        <h1>{data.title}</h1>
                        <Stars value={data.rating}/>
                    </div>

                    <div className="movie-creator">
                        <UserImg size={16} src={avatarURL} to="/profile"/>
                        <span>Por {user.name}</span>
                        <CiClock2 />
                        <span>{date}</span>
                    </div>

                    {   
                        data.tags &&
                        <div className="tags">
                            {   
                                data.tags.map(tag => (
                                    <Tag
                                        key={String(tag.id)}
                                        value={tag.name}
                                    />
                                ))
                            }
                        </div>
                    }

                    <p>
                        {data.description}
                    </p>
                </Content>
            </main>
        </Container>
    );
} 