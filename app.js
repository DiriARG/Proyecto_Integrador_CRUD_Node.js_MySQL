// Importamos los módulos que utilizaremos (express y morgan).
const express = require("express");
const morgan = require("morgan");

// Importamos las rutas definidas en otro archivo.
const rutaBienvenida = require("./src/routes/ruta_principal"); // Ruta de bienvenida.
const contenidoRoutes = require("./src/routes/contenidoRoutes"); // Rutas relacionadas con el contenido de "trailerflix".

// Definimos el puerto.
const PORT = process.env.PORT ?? 3008;

// Creamos una instancia de la aplicación Express.
const app = express();

// Desactivamos el encabezado X-Powered-By por razones de seguridad.
app.disable("x-powered-by");

// Middlewares.
app.use(express.json());
app.use(morgan("dev"));

// Rutas.
app.use("/", rutaBienvenida);
app.use("/contenido", contenidoRoutes);

// Middleware para manejar rutas no encontradas.
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada 🚫❗" });
});

// Inicializamos el servidor.
app.listen(PORT, () => {
  console.log(`Servidor escuchando en: http://localhost:${PORT}`);
});
