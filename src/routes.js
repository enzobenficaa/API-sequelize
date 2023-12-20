const express = require("express");
const routes = express.Router();

const PlanetController = require("../Controller/PlanetController");
const SatelliteController = require("../Controller/SatelliteController");

// Rotas de Planets
routes.post("/planets", PlanetController.store);
routes.get("/planets", PlanetController.index);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);
routes.post("/planets/:planetId/satellites", SatelliteController.store);
routes.get("/planets/:planetId/satellites", SatelliteController.index);
module.exports = routes;
