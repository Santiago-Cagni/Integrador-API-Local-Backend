//este script tiene la logica para manejar las peticiones relacionadas con las películas
// y se encarga de devolver la información de las películas del JSON.
import * as fs from 'fs';
//path es un modulo de node que nos permite trabajar con rutas de archivos
//en este caso, lo usamos para crear una ruta absoluta al archivo JSON que contiene los datos de las películas.
import * as path from 'path';
import Movie from '../models/movies'

//creamos una ruta absoluta al archivo JSON que contiene los datos de las películas.
// __dirname es una variable global de node que contiene la ruta del directorio actual
// y .repositories/movies.json es la ruta relativa al archivo JSON que contiene los datos de las películas.
const dataPath = path.join(__dirname, '../repositories/movies.json');

export class MoviesService {
    public get(): Movie[]{
        try{
            //leemos el JSON de las peliculas
            const data = fs.readFileSync(dataPath, 'utf-8');
            //convertimos el JSON a un objeto de tipo Movie[]
            const movies: Movie[] = JSON.parse(data);
            //retornamos el objeto de tipo Movie[]
            return movies;
        } catch(error:any){
            console.error("Error en MoviesService.get:", error); // consologueamos el error en tu consola del servidor
            throw new Error("Error interno del servidor al obtener las películas.");
        }
    }
    public getById(id: string): Movie | null{
        try {
        const movies = this.get();//reutilizamos el metodo y traemos todas las pelis
        const movie = movies.find((m) => m.id === id);//filtramos el id
        return movie || null;
        } catch (error) {
            console.error("Error en MoviesService.getById:", error);
            throw new Error("Error interno al buscar la película");
        }
    }
    public getByQuery(query: { [key: string]: string }): Movie[] {
        try {
            const movies = this.get();
            if (Object.keys(query).length === 0) {
                // console.log("No hay query");
                return movies; // Si no hay query, devolvemos todas las películas
            }
            const filteredMovies = movies.filter(movie => {
                //Object representa un objeto con clave y valor
                //.entries devuelve un array con los clave-valor del objeto
                //every devuelve true si todos los elementos del array cumplen la condicion (en este caso, que tenga la propiedad y que el valor coincida)
                return Object.entries(query).every(([key, value]) => {
                if (!movie.hasOwnProperty(key)) { // Revisa si la propiedad existe en la película(hasOwnProperty recibe un strin que en nuestro caso es la key y devolverá true si la película tiene esa propiedad)
                    return false; // Si la película no tiene la propiedad que se busca, no coincide
                }
                const movieValue = String((movie as any)[key]).toLowerCase();//convertimos el valor a string minusculas
                const queryValue = String(value).toLowerCase();//convertimos el valor de la peticion a strin minusculas
                return movieValue.includes(queryValue);//retornamos si el valor de la pelicula incluye el valor de la peticion
                });
            });
            return filteredMovies;//devolvemos lo obtenido por el filtro (puede ser todas las pelis, las filtradas o false)
        } catch (error) {
            console.error("Error en MoviesService.getMoviesByQuery:", error); // Ajuste el nombre del log
            throw new Error("Error interno al buscar películas por característica.");
        }
    }
}
    