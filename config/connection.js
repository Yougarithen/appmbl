const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './bdd/test1.db', // emplacement de la bdd
  logging: false 
});

module.exports = sequelize;