import { connection } from "../infra/db/connection";

type User = {
    email: string,
    password: string
}

export class UserRepository {
    async insert (email: string, password: string) {

        const results = await connection.query(("INSERT INTO users (email,password) VALUES ($1, $2)"), [email, password])
      
        return results.rows;
    };

    async findAll() {
    
        const results = await connection.query(('SELECT * FROM users'))
    
    
        return results.rows;
    };

    async findEmail(email: string): Promise<User[]> {
    
        const results = await connection.query(('SELECT * FROM users WHERE email = $1'), [email])
        
        const user: User[] = results.rows
    
        return user;
    };
}