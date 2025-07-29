export class MovieDto {
    //esta clase es un DTO (Data Transfer Object) para el POST de una pelicula. Sacamos el id porque en
    //el POST no lo necesitamos, ya que se crea automaticamente.
    private title: string;
    private year: number;
    private director: string;
    private duration: number;
    private poster: string;
    private genres: string[];
    private rate: number = 0;
    private sinopsis: string;
    constructor (title: string, year: number, director: string, duration: number, poster: string, genres: string[], rate: number = 0, sinopsis: string) {
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.poster = poster;
        this.genres = genres;
        this.rate = rate;
        this.sinopsis = sinopsis;
    }
}