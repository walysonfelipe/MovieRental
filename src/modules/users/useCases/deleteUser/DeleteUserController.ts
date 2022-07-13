import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
    async handle(req: Request, res: Response){
        const { id } = req.body;

        const deleteUserUseCase = new DeleteUserUseCase();

        const result = await deleteUserUseCase.execute({ id });

        return res.status(201).json(result);
    }
}