const getTopics = async (collection) => {
    try {
      const topics = await collection.find({}).toArray();
      return topics;
    } catch (error) {
      console.error("Error fetching topics:", error);
      return null;
    }
  };
  
  const createTopic = async (collection, topicData) => {
    try {
      const result = await collection.insertOne(topicData);
      return result.ops[0];
    } catch (error) {
      console.error("Error creating topic:", error);
      return null;
    }
  };
  
  module.exports = {
    getTopics,
    createTopic
  };