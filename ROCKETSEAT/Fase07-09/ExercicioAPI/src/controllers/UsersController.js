const AppError = require("../utils/AppError");
const {hash, compare} = require("bcrypt");

const sqliteConnection = require("../database/sqlite");
const UserRepository = require("../repositories/UserRepository");
const UserCreateService = require("../services/user/UserCreateService");
const UserUpdateService = require("../services/user/UserUpdateService");

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

        const userRepository = new UserRepository();
        const userCreateService = new UserCreateService(userRepository);

        await userCreateService.execute({name, email, password});

        return res.status(201).json();
    }

    async update(req, res){
        const {name, email, password, old_password} = req.body;
        const user_id = req.user.id;

        const userRepository = new UserRepository();
        const userUpdateService = new UserUpdateService(userRepository);

        await userUpdateService.execute({name, email, password, old_password, user_id});

        return res.status(200).json();
    }
}

module.exports = UsersController;