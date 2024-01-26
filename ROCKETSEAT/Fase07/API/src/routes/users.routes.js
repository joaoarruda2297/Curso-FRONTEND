const {Router} = require("express");

const userRoutes = Router();

userRoutes.post("/", (request,response) => {
    const {name, email, password} = request.body;
    //response.send(`Você chamou o post.`);
    //response.send(`Usuário: ${name} - E-mail: ${email} e a senha ${password}`);
    response.json({name, email, password});
});

module.exports = userRoutes;