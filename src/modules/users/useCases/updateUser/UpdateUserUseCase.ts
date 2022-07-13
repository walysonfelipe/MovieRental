
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";


export class UpdateUserUseCase{
    async execute({ id, name, email }: CreateUserDTO ): Promise<any> {

          if(!id){
            throw new AppError("User does not exists!");
          }
          const userExists = await prisma.user.findUnique({
            where:{
                id
            }
          });

          if(!userExists){
            throw new AppError("User does not exists!");
          }
         
        const updateUser = prisma.user.update({
            where: { id },
            data: { 
                name,
                email
             },
        });

        await updateUser.catch((err)=>{
          throw new AppError(`Update Not Completed!`);
        });
         return { message: "User updated successfully!"};
    }
}