const express = require("express");
const {
  getPersonas,
  getPersona,
  deletePersona,
  logger,
} = require("./src/controller");
const cors = require("cors");
const { handlerNotFound } = require("./src/middlewares");
const PORT = 3000;

const app = express();

app.use(cors());

app.use(express.json());

app.use(logger);

app.get("/", (req, res) => {
  res.send("<h1>Masterchef</h1>");
});

app.get("/api/personas", (req, res) => {
  res.json(getPersonas());
});
app.get("/api/personas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const persona = getPersona(id);
  persona ? res.json(persona).status(200) : res.status(404).end();
});
app.delete("/api/personas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  deletePersona(id) ? res.status(204).end() : res.status(404).end();
});
app.post("/api/personas/", (req, res) => {});

app.use(handlerNotFound);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
