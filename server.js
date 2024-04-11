const express = require("express");
const { MongoClient } = require('mongodb');
const app = express();
const uri = "mongodb+srv://veric:1YiQT0DlKu38COKZ@test.hak6e2f.mongodb.net/?retryWrites=true&w=majority";
const port = process.env.PORT || 3001;
let collection;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const client = new MongoClient(uri);

async function runDBConnection() {
  try {
    await client.connect();
    const database = client.db('cyber_guard');
    collection = database.collection('topics');
    console.log("Connected to MongoDB Atlas. Database: cyber_guard, Collection: topics");
  } catch (ex) {
    console.error("Error connecting to MongoDB:", ex);
  }
}

// Add GET route to fetch topics
// Add GET route to fetch topics
// Add GET route to fetch topics
app.get('/api/topics', async (req, res) => {
  try {
    console.log("GET request received for /api/topics"); // Add logging here
    const topics = await collection.find({}).toArray();
    console.log("Fetched topics:", topics); // Add logging here
    res.status(200).json({ statusCode: 200, data: topics });
  } catch (error) {
    console.error("Error processing GET request:", error); // Log detailed error
    res.status(500).json({ statusCode: 500, message: 'Internal server error' });
  }
});



// Add POST route to handle form submission
app.post('/api/topics', async (req, res) => {
  try {
    const newTopic = req.body;
    console.log("Received new topic:", newTopic);
    const result = await collection.insertOne(newTopic);
    console.log("Inserted topic into database:", result.ops[0]);
    res.status(201).json({ statusCode: 201, message: 'Topic added successfully', data: result.ops[0] });
  } catch (error) {
    console.error("Error processing POST request:", error);
    res.status(500).json({ statusCode: 500, message: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Call the runDBConnection function to connect to the MongoDB database
runDBConnection();
