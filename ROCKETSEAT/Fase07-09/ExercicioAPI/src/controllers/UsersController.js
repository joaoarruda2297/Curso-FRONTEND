const AppError = require("../utils/AppError");
const {hash, compare} = require("bcrypt");

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
        const {name, email, password, old_password} = req.body;
        const {id} = req.params;

        const database = await sqliteConnection();
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

        //verificando se o usuario realmente existe
        if(!user){
            throw new AppError("Usuário não encontrado");
        }

        //verificando se está tentando trocar para um email que já está em uso
        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);
        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id){
            throw new AppError("Este email já está em uso!");
        }

        //isso é uma boa prática, mas não é necessário.
        //Eu poderia colocar name e email no update de baixo...
        user.name = name;
        user.email = email;

        if(password && !old_password){
            throw new AppError("Você precisa informar a senha antiga para definir a nova senha");
        }

        if(password && old_password){
            const checkOldPassword = await compare(old_password, user.password);

            if(!checkOldPassword){
                throw new AppError("Senha antiga não confere");
            }

            user.password = await hash(password, 8);
        }

        await database.run(`
            UPDATE users SET
            name = ?,
            email = ?,
            password = ?,
            updated_at = ?,
            WHERE id = ?`,
            [user.name, user.email,user.password, new Date(), id]
        );

        return res.status(200).json();
    }
}

module.exports = UsersController;