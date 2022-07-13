import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class DeleteUserUseCase {
    async execute({ id }: CreateUserDTO): Promise<any> {

      const deleteUser = prisma.user.delete({
            where:{
                id
            }
        });
       
      await deleteUser.catch((err)=>{
        throw new AppError(err.meta.cause);
      });

        return { message: "Successfully deleted!"}
    }
}