const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const books = sequelize.define('books', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  auteur: {
    type: DataTypes.STRING,
    allowNull: false
  },
  annee: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  imageUri: {
    type: DataTypes.STRING,
    allowNull: true 
  }
}, {
  tableName: 'books', 
  timestamps: false 
});

module.exports = books;
