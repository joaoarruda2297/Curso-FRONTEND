const AppError = require("../utils/AppError");
const {hash, compare} = require("bcrypt");

class UserUpdateService{
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async execute({name, email, password, old_password, user_id}){
        const user = await this.userRepository.findByUserId({user_id});
        //verificando se o usuario realmente existe
        if(!user){
            throw new AppError("Usuário não encontrado");
        }

        //verificando se está tentando trocar para um email que já está em uso
        const userWithUpdatedEmail = await this.userRepository.findByEmail({email});
        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id){
            throw new AppError("Este email já está em uso!");
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

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

        const userUpdated = await this.userRepository.updateUser({name: user.name, email: user.email, password: user.password, user_id});

        return userUpdated;
    }
}

module.exports = UserUpdateService;