const dotenv = require("dotenv");
dotenv.config();
const database = process.env.MONGOLAB_URI;
const { MongoClient } = require("mongodb");

// async function listDatabases(client) {
//   databasesList = await client.db().admin().listDatabases();

//   console.log("Databases:");
//   databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
// }
async function main() {
  const client = new MongoClient(database);
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    // await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

module.exports = { main };
