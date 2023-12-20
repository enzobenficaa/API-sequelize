const Planet = require("../models/Planet");

module.exports = {
  async store(req, res) {
    const { name, position } = req.body;
    try {
      const planet = await Planet.create({ name, position });
      return res.json(planet);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
  async index(req, res) {
    try {
      const planets = await Planet.findAll();
      return res.json(planets);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
  async put(req, res) {
    const { name, size, position } = req.body;
    try {
      await Planet.update(
        {
          name,
          size,
          position,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      return res.send("Planeta atualizado com sucesso!");
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
  async delete(req, res) {
    try {
      await Planet.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send("Sucesso! Planeta excluído com sucesso!");
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
