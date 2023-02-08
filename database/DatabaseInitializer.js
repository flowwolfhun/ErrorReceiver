const { Sequelize, Model, DataTypes } = require('sequelize');

module.exports.DatabaseInitializer = function(){

const sequelize = new Sequelize('errorReceiver', 'errorReceiver', 'errorReceiver', {
    dialect: 'mssql',
    dialectOptions: {
      // Observe the need for this nested `options` field for MSSQL
      options: {
        // Your tedious options here
        useUTC: false,
        dateFirst: 1
      }
    }
  });

  const ReceivedErrorTable = sequelize.define('ReceivedError', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

    errorMessage: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Other model options go here
  });

  sequelize.sync();
}