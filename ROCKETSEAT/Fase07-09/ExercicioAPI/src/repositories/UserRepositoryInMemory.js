class UserRepositoryInMemory{
    users = [];

    async createUser({name, email, password}){
        const user = {
            id: Math.floor(Math.random() * 1000)+1,
            email,
            name,
            password
        };

        this.users.push(user);

        return user;
    }

    async findByEmail(email){
        return this.users.find(user => user.email === email);
    }

    async findByUserId({user_id}){
        return this.users.find(user => user.id === user_id);
    }

    async updateUser({name, email, password, user_id}){
        const user = {
            id: user_id,
            email: email,
            name: name,
            password: password
        };

        this.users.find(useri => {
            if(useri.id === user.id){
                useri = user;
            }
        });

        return user;
    }
}

module.exports = UserRepositoryInMemory;