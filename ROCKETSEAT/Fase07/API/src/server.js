const express = require("express");

const app = express();
app.use(express.json());

/*app.get("/message/:id/:user", (request, response) => {
    const {id, user} = request.params;
    
    response.send(`
    O id da mensagem é: ${id}.
    Para o usuário: ${user}.`
    );
});

app.get("/users", (request,response) => {
    const {test1, test2} = request.query;
    response.send(`Pagina: ${test1}. Mostrar: ${test2}`);
});*/
//para acessar esse é necessário colocar da forma:
//localhost:3000/users?test1=X&test2=Y

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));