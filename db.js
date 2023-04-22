const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const database = process.env.MONGOLAB_URI;
async function main() {
  const client = new MongoClient(database);

  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log("connect to database");
    // Make the appropriate DB calls
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

module.exports = { main };
