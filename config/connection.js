// This section of my code is my dotenv import
require("dotenv").config();

// This section of my code is my sequelize import
const { Sequelize } = require("sequelize");

// Allows for environmental variables to be used
const sequelizeInstance = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: process.env.DB_HOST || "localhost", // Use DB_HOST if available, otherwise default to "localhost"
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// Test the connection
async function testConnection() {
  try {
    await sequelizeInstance.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Exit the process with an error code
  }
}

// Export the sequelize instance and the function to test the connection
module.exports = {
  sequelize: sequelizeInstance,
  testConnection,
};



