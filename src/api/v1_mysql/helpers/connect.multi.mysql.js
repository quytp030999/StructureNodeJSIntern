const Sequelize = require("sequelize");

const nodejsbasic = new Sequelize(
  "nodejsbasic", // name database
  "root", // name user
  "root", // password
  {
    host: "localhost",
    dialect: "mysql", // "mysql" | "mariadb" | "sqlite" | "postgres" | "mssql",
    dialectModule: require("mysql2"),

    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },

    define: {
      timestamps: true,
      freezeTableName: true,
    },
    logging: false,
  }
);

module.exports = { nodejsbasic };
