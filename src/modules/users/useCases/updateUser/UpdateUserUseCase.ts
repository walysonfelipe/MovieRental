
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";


export class UpdateUserUseCase{
    async execute({ id, name, email }: CreateUserDTO ): Promise<any> {

       
          const userExists = await prisma.user.findUnique({
            where:{
                id
            }
          });

          if(!userExists){
            throw new AppError("User does not exists!");
          }
         
          if(!name){
            throw new AppError("Username not filled!");
          }

          if(!email){
             throw new AppError("Email not filled!")
          }

        const updateUser = await prisma.user.update({
            where: { id },
            data: { 
                name,
                email
             },
        });

         return { message: "User updated successfully!"};
    }
}