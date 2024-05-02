const sqliteConnection = require("../database/sqlite");

class UserRepository{
    async findByEmail(email){
        const database = sqliteConnection();
        const user = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        return user;
    }

    async createUser({name, email, password}){
        const database = sqliteConnection();

        const userId = await database.run(
            "INSERT INTO users (name,email,password) VALUES (?,?,?)", 
            [name, email, password]
        );

        return {id: userId};
    }

    async findByUserId({user_id}){
        const database = sqliteConnection();

        const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id]);

        return user;
    }

    async updateUser({name, email, password, user_id}){
        const database = sqliteConnection();

        const user = await database.run(`
            UPDATE users SET
            name = ?,
            email = ?,
            password = ?,
            updated_at = DATETIME('now')
            WHERE id = ?`,
            [name, email, password, user_id]
        );

        return user;
    }
}

module.exports = UserRepository;