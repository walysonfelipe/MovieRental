import { Request, Response } from "express";
import { UpdateMovieUseCase } from "./UpdateMovieUseCase";

export class UpdateMovieController {
    async handle(req: Request, res: Response){
       const { 
        id, 
        title, 
        duration, 
        release_date 
        } = req.body;

       const updateMovieUseCase = new UpdateMovieUseCase();

       const result = await updateMovieUseCase.execute({
        id, 
        title, 
        duration, 
        release_date
       });

       return res.status(201).json(result);
    }
}