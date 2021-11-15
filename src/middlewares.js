const handlerNotFound = (req, res) => {
  res.status(200).json({ ok: false, error: "No existe ese recurso" }).end();
};

module.exports = {
  handlerNotFound,
};
