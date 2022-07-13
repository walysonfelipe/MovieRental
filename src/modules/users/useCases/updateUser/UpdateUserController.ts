import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController{
    async handle(req: Request, res: Response){
        const { id, name, email } = req.body;

        const updateUserUseCase = new UpdateUserUseCase();

        const result = await updateUserUseCase.execute({ id, name, email });

        return res.status(201).json(result);
    }
}