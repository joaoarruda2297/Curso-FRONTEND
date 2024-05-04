const AppError = require("../../utils/AppError");
const {hash} = require("bcrypt");

class UserCreateService{
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async execute({name, email, password}){
        const checkUserExist = await this.userRepository.findByEmail(email);        

        if(checkUserExist){
            throw new AppError("Este e-mail já está em uso.", 401);
        }

        const hashedPassword = await hash(password,8);//o metodo hash é assincrono, pois demora para criptografar, logo precisa de um await

        const userCreated = await this.userRepository.createUser({name, email, password: hashedPassword});

        return userCreated;
    }
}



module.exports = UserCreateService;