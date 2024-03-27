const AppError = require("../utils/AppError");

class UsersController{
    /* FORMA PADRÂO DE UM CONTROLLER
    * index - GET para listar varios registros
    * show - GET para exibir um registro específico
    * create - POST para criar um registro
    * update - PUT para atualizar um registro
    * delete - DELETE para remover um registro
    */
    create(req,res){
        const {name, email} = req.body;

        if(!name){
            throw new AppError("Nome é obrigatório!", 404);
        }
        res.status(201).json({name,email});

    }

    async update(req, res){
        //precisa atualizar no banco de dados
    }
}

module.exports = UsersController;