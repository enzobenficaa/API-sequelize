const Planet = require("../models/Planet");
const Satellites = require("../models/Satellite");
Planet.hasOne(Satellites, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Satellites.belongsTo(Planet, { foreigKey: "planetId", as: "planet" });
module.exports = { Planet, Satellites };
