const Topic = require('../models/topic');
const dbConnection = require('../dbConnection');

const getTopics = async (req, res) => {
  try {
    console.log("GET request received for /api/topics");
    const collection = dbConnection.getCollection();
    const topics = await Topic.getTopics(collection);
    console.log("Fetched topics:", topics);
    res.status(200).json({ statusCode: 200, data: topics });
  } catch (error) {
    console.error("Error processing GET request:", error);
    res.status(500).json({ statusCode: 500, message: 'Internal server error' });
  }
};

const createTopic = async (req, res) => {
  try {
    const newTopic = req.body;
    console.log("Received new topic:", newTopic);
    const collection = dbConnection.getCollection();
    const createdTopic = await Topic.createTopic(collection, newTopic);
    console.log("Inserted topic into database:", createdTopic);
    res.status(201).json({ statusCode: 201, message: 'Topic added successfully', data: createdTopic });
  } catch (error) {
    console.error("Error processing POST request:", error);
    res.status(500).json({ statusCode: 500, message: 'Internal server error' });
  }
};

module.exports = {
  getTopics,
  createTopic
};