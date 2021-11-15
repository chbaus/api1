const personas = require("./db.json");

const getPersonas = () => {
  return personas;
};

const getPersona = (id) => {
  return personas.find((persona) => persona.id === id);
};

const deletePersona = (id) => {
  const index = personas.findIndex((persona) => persona.id === id);
  if (index != -1) {
    personas.splice(index, 1);
    return true;
  }
  return false;
};
const logger = (req, res, next) => {
  console.log(`Hay ${personas.length} personas en la lista`);
  next();
};

const createPersona = (data) => {};

const updatePersona = (persona) => {
  const index = personas.findIndex((persona) => persona.id === id);
  if (index != -1) {
    personas.splice(index, 1);
    return true;
  }
  return false;
};

module.exports = {
  getPersonas,
  getPersona,
  deletePersona,
  logger,
};
