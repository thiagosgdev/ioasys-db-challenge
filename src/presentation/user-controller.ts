import { compare, hash } from "bcrypt";
import { Request, Response } from "express"
import { UserRepository } from "../domain/user-repository";

const repository = new UserRepository();

type User = {
    email: string,
    password: string
}

export class UserController {

    async comparePasswords (password: string, userPassword:string ) {
        const isValid = await compare(password, userPassword);
        return isValid;
    }
    
    async getUsers (request: Request, response: Response)  {
        try {
            const users = await repository.findAll();
            response.status(200).json(users);
        } catch (error) {
            response.status(404).json({ error });
        }
    }
    
    async insertUser (request: Request, response: Response)  {
        try {
            const { email, password } = request.body;
            const hashedPassword = await hash(password, 12);
            const user = await repository.insert(email, hashedPassword);
            response.status(200).json(user);
        } catch (error) {
            response.status(404).json({ error });
        }
    }

    async login (request: Request, response: Response)  {
        try {
            const { email, password } = request.body;
            const user:User[] = await repository.findEmail(email);

            if(user.length < 1){
                await hash ("123", 12)
                
                return response.status(400).json("Invalid credentials!!");                
            }
            
            const isValid = await compare(password, user[0].password)
            
            if(!isValid){
                return response.status(400).json("Invalid credentials");
            }
            return response.status(200).json(user);

        } catch (error) {
            response.status(404).json({ error });
        }
    }
}

