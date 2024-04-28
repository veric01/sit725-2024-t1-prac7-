const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://veric:1YiQT0DlKu38COKZ@test.hak6e2f.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
let collection;

const connectToDatabase = async () => {
  try {
    await client.connect();
    const database = client.db('cyber_guard');
    collection = database.collection('topics');
    console.log("Connected to MongoDB Atlas. Database: cyber_guard, Collection: topics");
  } catch (ex) {
    console.error("Error connecting to MongoDB:", ex);
  }
};

const getCollection = () => collection;

module.exports = {
  connectToDatabase,
  getCollection
};