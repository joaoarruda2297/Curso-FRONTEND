const UserUpdateService = require("./UserUpdateService");
const UserCreateService = require("./UserCreateService");
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");
const AppError = require("../utils/AppError");

describe("UserUpdateService", () => {
    let userRepositoryInMemory = null;
    let userUpdateService = null;
    let userCreateService = null;

    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        userUpdateService = new UserUpdateService(userRepositoryInMemory);
        userCreateService = new UserCreateService(userRepositoryInMemory);
    });

    it("user should be updated", async () =>{
        const user = {
            name: 'User test',
            email: "user@test.com",
            password: "123",
            old_password,
            id
        };

        const userUpdated = await userUpdateService.execute(user);
    
        expect(userUpdated).toHaveProperty("id");
    });

    it("couldnt find user", async () => {
        const user1 = {
            name: 'User test 1',
            email: "user@test.com",
            password: "123"
        };

        const user2 = {
            name: 'User test 2',
            email: "user@test.com",
            password: "456"
        };

        await userCreateService.execute(user1);
        await expect(userUpdateService.execute(user2)).rejects.toEqual(new AppError("Usuário não encontrado"));
    });
});