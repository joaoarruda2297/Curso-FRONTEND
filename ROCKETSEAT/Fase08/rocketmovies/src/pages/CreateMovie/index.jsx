import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Marker } from "../../components/Marker";
import { Button } from "../../components/Button";

export function CreateMovie(){
    return(
        <Container>
            <Header/>

            <main>
                <Content>
                    <ButtonText/>
                    <h1>Novo filme</h1>
                    <div className="twoInputs">
                        <Input
                            placeholder="Título"
                            type="text"
                        />

                        <Input
                            placeholder="Sua nota (de 0 a 5)"
                            type="text"
                        />
                    </div>

                    <TextArea placeholder="Observações"/>

                    <h2>Marcadores</h2>

                    <div className="boxMarker">
                        <Marker
                            value="React"
                        />
                        <Marker
                            isNew //precisa ser colocado antes!!!
                            placeholder="Novo marcador"
                        />
                    </div>

                    <div className="boxButton">
                        <Button title="Excluir filme" className="delete-button"/>

                        <Button title="Salvar alterações"/>
                    </div>

                </Content>
            </main>
        </Container>
    );
}