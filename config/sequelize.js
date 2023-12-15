const Sequelize = require("sequelize");
const database = require("./config");

const sequelize = new Sequelize(database);
sequelize
  .authenticate()
  .then(() => console.log("Conexão bem-sucedida!"))
  .catch((error) => console.log(error));
module.exports = sequelize;
