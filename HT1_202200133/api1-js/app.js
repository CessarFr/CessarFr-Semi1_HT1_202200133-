const express = require('express');
const app = express();
const port = 3000;

app.get('/check', (req, res) => {
  res.status(200).send();
});

app.get('/', (req, res) => {
  res.json({
    "Instancia": "Instancia 1 - API #1",
    "Curso": "Seminario de Sistemas 1",
    "Estudiante": "Estudiante - 202200133"
  });
});

app.listen(port, () => {
  console.log(`API #1 corriendo en http://localhost:${port}`);
});