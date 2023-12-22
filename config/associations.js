const Planet = require("../models/Planet");
const Satelite = require("../models/Satelite");
const Cap = require("../models/Cap");
const Spaceship = require("../models/Spaceship");

Planet.hasOne(Satelite, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Satelite.belongsTo(Planet, { foreignKey: "planetId", as: "planet" });

// Planet.hasMany(Satelite, { onDelete: "CASCADE", onUpdate: "CASCADE" });
// Satelite.belongsTo(Planet, { foreignKey: "planetId", as: "planet" });

Cap.belongsToMany(Spaceship, {
  foreignKey: "capId",
  through: "capSpaceship",
  as: "spaceships",
});

Spaceship.belongsToMany(Cap, {
  foreignKey: "spaceshipId",
  through: "capSpaceship",
  as: "caps",
});

module.exports = { Planet, Satelite };
