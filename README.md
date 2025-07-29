+++++++++++++++README HECHO DESCARADAMENTE CON INTELIGENCIA ARTIFICIAL++++++++++++++
# 🎬 API de Películas (Backend)

Una API RESTful desarrollada con Node.js y Express para gestionar información de películas, con funcionalidades de obtención por ID, obtención de todas y filtrado por diversas características.
Para el desarrollo del proyecto se opto por usar como material de consulta la IA de Gemini y las clases grabadas. Se desactivó github Copilot por brindar mas problemas que soluciones.

## ✨ Características

* Obtención de todas las películas.
* Obtención de películas por ID.
* Búsqueda y filtrado de películas por `title`, `genre`, `director`, `year` (o cualquier otra característica definida en `movies.json`).
* Manejo de errores para rutas no encontradas y errores internos del servidor.
* Lectura de datos desde un archivo JSON local (`movies.json`).

## 🛠️ Tecnologías Utilizadas

* **Node.js**: Entorno de ejecución de JavaScript.
* **Express.js**: Framework web para Node.js.
* **TypeScript**: Lenguaje de programación que añade tipado estático a JavaScript.
* **CORS**: Middleware para habilitar solicitudes de origen cruzado.
* **`fs` (File System)** y **`path`**: Módulos nativos de Node.js para la manipulación de archivos.

## 🚀 Cómo Empezar

Sigue estos pasos para levantar la API en tu máquina local.

### 📋 Prerequisitos

Asegúrate de tener instalado lo siguiente:

* [**Node.js**](https://nodejs.org/es/download/) (versión 14 o superior recomendada)
* [**npm**](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (viene con Node.js) o [**Yarn**](https://yarnpkg.com/getting-started/install)

### ⚙️ Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone AGREGAR URL
    cd api-peliculas
    ```
2.  **Instala las dependencias:**
    ```bash
    npm install
    # o si usas yarn
    # yarn install
    ```

### ▶️ Ejecución

1.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La API estará corriendo en `http://localhost:3000`.

### 📚 Endpoints de la API

Aquí están los endpoints disponibles:

* **`GET /movies/get`**: Obtiene todas las películas.
    * **Respuesta de éxito:** `200 OK` con un array de objetos película.
    * **Ejemplo:** `http://localhost:3000/movies/get`
* **`GET /movies/:id`**: Obtiene una película por su ID único.
    * **Parámetros:** `id` (string, en la URL).
    * **Respuesta de éxito:** `200 OK` con el objeto película.
    * **Respuesta de error:** `404 Not Found` si la película no existe.
    * **Ejemplo:** `http://localhost:3000/movies/0328f16e-6ad4-4764-b8f0-2d7a5d4f5cb1` (usa un ID real de tu `movies.json`)
* **`GET /movies/search?param=value`**: Busca y filtra películas por un criterio específico.
    * **Query Parameters:** Puedes usar `title`, `genre`, `director`, `year` (o cualquier otro campo de tus películas). Soporta búsqueda parcial (ej. `title=dark` encontrará "Dark Knight").
    * **Respuesta de éxito:** `200 OK` con un array de películas que coinciden.
    * **Respuesta de error:** `400 Bad Request` si no se proporciona ningún parámetro de búsqueda. `404 Not Found` si no se encuentran películas que coincidan.
    * **Ejemplo:**
        * `http://localhost:3000/movies/search?genre=Drama`
        * `http://localhost:3000/movies/search?title=inception`
        * `http://localhost:3000/movies/search?director=Nolan`

## 📄 Estructura del Proyecto
```
api-peliculas/
├── src/
│   ├── controllers/
│   │   └── movies.controller.ts
│   ├── models/
│   │   └── movies.ts             # Definición de la interfaz Movie
│   ├── repositories/
│   │   └── movies.json           # Archivo de datos de las películas
│   ├── routes/
│   │   └── movies.routes.ts
│   ├── services/
│   │   └── movies.service.ts
│   └── app.ts                    # Archivo principal de la aplicación Express
├── package.json
├── tsconfig.json
├── .gitignore
├── README.md
└── ...otros archivos de configuración
```

