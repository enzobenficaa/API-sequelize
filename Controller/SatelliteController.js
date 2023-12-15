const Satellite = require("../models/Satellite");
const Planet = require("../models/Planet");

module.exports = {
  async store(req, res) {
    const { planetId } = req.params;
    const { name, serialNumber } = req.body;
    const planet = await Planet.findByPk(planetId);
    if (!planet) {
      res.send("Esse planeta não existe");
    }
    const satelite = await Satellite.create({ name, serialNumber, planetId });
    return res.json(satelite);
  },
  async index(req, res) {
    const { planetId } = await req.params;
    if (!planetId) {
      res.send("Esse planeta não existe!");
    }
    const planet = await Planet.findByPk(planetId, {
      include: Satellite,
    });
    return res.send(json);
  },
};
