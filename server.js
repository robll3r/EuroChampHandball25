const http = require("http");
const fs = require("fs");
const path = require("path");

// Configuración del servidor
const PORT = 3000;

http
  .createServer((req, res) => {
    const filePath = path.join(__dirname, "index.html"); // Ruta del archivo HTML
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error al cargar el archivo.");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });
  })
  .listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
