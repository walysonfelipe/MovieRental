import { Router } from "express";
import { CreateMovieController } from "../modules/movies/useCases/createMovie/CreateMovieController";
import { CreateMovieRentController } from "../modules/movies/useCases/createMovieRent/CreateMovieRentController";
import { GetMoviesByReleaseDateController } from "../modules/movies/useCases/getMoviesByReleaseDate/GetMoviesByReleaseDateController";
import { UpdateMovieController } from "../modules/movies/useCases/updateMovie/UpdateMovieController";

const createMovieController = new CreateMovieController();
const createMovieRentController = new CreateMovieRentController();
const getMoviesByReleaseDateController = new GetMoviesByReleaseDateController();
const updateMovieController = new UpdateMovieController();
const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.get("/release", getMoviesByReleaseDateController.handle)
movieRoutes.post("/rent", createMovieRentController.handle);
movieRoutes.put("/",updateMovieController.handle)
export { movieRoutes };