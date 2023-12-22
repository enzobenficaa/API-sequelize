"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("satelites", {
      id: {
        type: Sequelize.INTEGER,
        autoImcrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      serialNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      planetId: {
        type: Sequelize.INTEGER,
        references: { model: "planets", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createAt: {
        type: Sequelize.DATE,
      },
      updateAt: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("satelites");
  },
};
