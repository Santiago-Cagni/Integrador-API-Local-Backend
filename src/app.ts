//esta es la aplicacion principal
//usamos cors y express
import express from "express";
import cors from 'cors';
//traemos las rutas de las peliculas
import movieRoutes  from "./routes/movies.routes";
//indicamos que la app usa express
const app = express();
//indicamos que la app usa la libreria de express.json() para poder recibir datos en formato JSON
app.use(express.json()); 

app.use((req, res, next) => {
    console.log(`[DEBUG_APP] Petición recibida: ${req.method} ${req.url}`);
    next(); // Pasa la solicitud al siguiente middleware/ruta
});

//usamos cors que son las "reglas de seguridad" que nos permiten recibir peticiones desde otros dominios
app.use(cors());
//usamos las rutas de las peluculas
app.use("/movies", movieRoutes)
//probamos que la app funciona escuchando el puerto 3000
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
