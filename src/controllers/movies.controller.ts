//el controlador se va a encargar de manejar las peticiones y contiene los metodos que se van a usar en cada endpoint
import {Request, Response} from 'express';
import { MoviesService} from '../services/movies.service';

export class MoviesController {
    private moviesService : MoviesService;
    constructor() {
        this.moviesService = new MoviesService();
    };
    public get = async (req: Request, res: Response) => {
        try {
        const movies = this.moviesService.get();
        res.json(movies);
    } catch (error: any) {
        console.error("Error en MoviesController.get:", error.message);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}
    public getMoviesByQuery = (req: Request, res: Response) => {
        try {
            const queryParams = req.query; 
            if (Object.keys(queryParams).length === 0) {
                res.status(400).json({ message: 'Se requiere al menos un parámetro de búsqueda.' });
                return;
            }
            const movies = this.moviesService.getByQuery(queryParams as Record<string, string>);//con Record<string, string> le decimos que el objeto queryParams es un objeto con claves y valores de tipo string
            if (movies.length === 0) {
                res.status(404).json({ message: 'No se encontraron películas que coincidan con los criterios de búsqueda.' });
                return;
            }
            res.status(200).json(movies);
        } catch (error: any) {
            console.error("Error en MoviesController.getMoviesByQuery:", error.message);
            res.status(500).json({ message: "Error interno del servidor al buscar películas." });
        }
    };
      public getById = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id;
            const movie = this.moviesService.getById(id);
            if (!movie) {
                res.status(404).json({ error: "Película no encontrada" });
                return;
            }
            res.json(movie);
        } catch (error: any) {
            console.error("Error en getById:", error.message);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }  
}
