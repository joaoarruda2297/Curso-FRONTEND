const AppError = require("../utils/AppError");
const {hash} = require("bcrypt");

const sqliteConnection = require("../database/sqlite");

class UsersController{
    /* FORMA PADRÂO DE UM CONTROLLER
    * index - GET para listar varios registros
    * show - GET para exibir um registro específico
    * create - POST para criar um registro
    * update - PUT para atualizar um registro
    * delete - DELETE para remover um registro
    */
    async create(req,res){
        const {name, email, password} = req.body;

        const database = await sqliteConnection();
        const checkUserExist = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if(checkUserExist){
            throw new AppError("Este e-mail já está em uso.", 401);
        }

        const hashedPassword = await hash(password,8);//o metodo hash é assincrono, pois demora para criptografar, logo precisa de um await

        await database.run(
            "INSERT INTO users (name,email,password) VALUES (?,?,?)", 
            [name, email, hashedPassword]
        );//a diferença entre .run e .get é que um devolve um parametro, enquanto o outro só roda

        return res.status(201).json();

    }

    async update(req, res){
        //precisa atualizar no banco de dados
    }
}

module.exports = UsersController;