import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateMovieDTO } from "../../dtos/CreateMovieDTO";

export class UpdateMovieUseCase {
    async execute({ id, title, duration, release_date }: CreateMovieDTO): Promise<any> {
    
        const movieExists = await prisma.movie.findUnique({
           where: {
            id
           }
        });

        if(!movieExists){
            throw new AppError("Movie does not exists!");
        }


       const updateMovie = prisma.movie.update({
         where: {
          id
         },
         data: {
          title,
          duration,
          release_date
       }
      })

      await updateMovie.catch((err)=>{
        throw new AppError(`This ${err.meta.target} already exists`);
      });
      
      return { message: "Successfully Update Completed!"};
    }
}