export default class Movie {
    public id: string;
    public title: string;
    public year: number;
    public director: string;
    private duration: number;
    private poster: string;
    public genre: string[];
    private rate: number = 0;
    private sinopsis: string;
    constructor(id: string, title: string, year: number, director: string, duration: number, poster: string, genres: string[], rate: number = 0, sinopsis: string) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.poster = poster;
        this.genre = genres;
        this.rate = rate;
        this.sinopsis = sinopsis;
    }
}