//en este scrip mcreamos las rutas para cada endpint de nuestra API
import { Router } from "express";
import { MoviesController } from "../controllers/movies.controller";

const router = Router();

const moviesController = new MoviesController();

router.get("/search", moviesController.getMoviesByQuery);
router.get("/get", moviesController.get);
router.get("/:id", moviesController.getById);

export default router; 