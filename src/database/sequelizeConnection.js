import Sequelize from "sequelize";
import config from "../config/config.js";

const { username, password, database, host, dialect, port } =
  config.development;

const connection = async () => {
  const sequelize = new Sequelize(database, username, password, {
    host: host,
    port: port,
    dialect: dialect,
    logging: false, //Set to true if we want to see SQL queries in the console
  });

  try {
    await sequelize.authenticate();
    console.log("Database Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connection;
