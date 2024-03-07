const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const { compare } = require("bcryptjs");
const authConfig = require("../configs/auth");
const { sign } = require("jsonwebtoken");

class SessionsController{
    async create(request, response){
        const { email,password } = request.body;
        
        const user = await knex("users").where({email}).first();

        if(!user){//nao vale a pena verificar os dois juntos pois se nao houver usuário igual já tem que parar
            throw new AppError("E-mail inválido", 401);
        }
        
        const passwordMatched = await compare(password, user.password);//devolve um boolean

        if(!passwordMatched){
            throw new AppError("Senha inválida", 401);
        }
                
        const { secret, expiresIn } = authConfig.jwt;
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        });

        return response.json({user, token});
    }
}

module.exports = SessionsController;