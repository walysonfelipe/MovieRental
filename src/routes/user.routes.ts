import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { DeleteUserController } from "../modules/users/useCases/deleteUser/DeleteUserController";
import { GetAllUsersController } from "../modules/users/useCases/getAllUsers/GetAllUsersController";
import { UpdateUserController } from "../modules/users/useCases/updateUser/UpdateUserController";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.put("/", updateUserController.handle);
userRoutes.delete("/", deleteUserController.handle);
userRoutes.get("/", getAllUsersController.handle);
export { userRoutes };