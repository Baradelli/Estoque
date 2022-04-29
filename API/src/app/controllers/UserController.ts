import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from "../models/User"

class UserController {
    index(req: Request, res: Response) {
        return res.send({ userID: req.userId })
    }

    async store(req: Request, res: Response){
        const repository = getRepository(User);
        const { nome, email, password } = req.body;

        const userExists = await repository.findOne({ where: { email } });

        if (userExists) {
            return res.sendStatus(409);
        }

        const user = repository.create({ nome, email, password });
        await repository.save(user)

        return res.json(user);
    }
    async list(req: Request, res: Response) {
        const repository = getRepository(User);
        const { email } = req.body;

        const users = await repository.findOne({where: { email }});

        return res.json(users);
    }
}

export default new UserController();